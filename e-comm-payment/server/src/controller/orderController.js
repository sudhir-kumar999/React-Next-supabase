import Order from "../models/Order.js";

export const myOrders = async (req, res) => {
  const orders = await Order.find({
    userId: req.user._id,
    status: "confirmed",
  }).populate("productId");

  res.json({
    success: true,
    orders,
  });
};
