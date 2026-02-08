import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  amount: Number,
  status: {
    type: String,
    enum: ["pending", "confirmed", "failed"],
    default: "pending",
  },
  razorpayOrderId: String,
  razorpayPaymentId: String,
});

export default mongoose.model("Order", orderSchema);
