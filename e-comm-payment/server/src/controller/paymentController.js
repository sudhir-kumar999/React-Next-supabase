import { razorpayInstance } from "../config/razorpay.js";
import Order from "../models/Order.js";
import crypto from "crypto";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const { productId, price } = req.body;

    const options = {
      amount: price * 100,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    const order = await razorpayInstance.orders.create(options);

    // Save order as pending
    const newOrder = await Order.create({
      userId: req.user._id,
      productId,
      amount: price,
      razorpayOrderId: order.id,
      status: "pending",
    });

    res.json({
      success: true,
      order,
      orderId: newOrder._id,
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};


// import crypto from "crypto";
// import Order from "../models/Order.js";

export const verifyPayment = async (req, res) => {
  try {
    const { order_id, payment_id, signature } = req.body;

    const body = order_id + "|" + payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid signature",
      });
    }

    await Order.findOneAndUpdate(
      { razorpayOrderId: order_id },
      {
        status: "confirmed",
        razorpayPaymentId: payment_id,
      }
    );

    res.json({
      success: true,
      message: "Payment verified successfully",
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
