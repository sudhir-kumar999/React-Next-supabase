import Order from "../models/Order.js";

export const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user._id,
      status: "confirmed",
    })
      .populate("items.productId")   // 👈 MAIN FIX
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log("MyOrders Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
