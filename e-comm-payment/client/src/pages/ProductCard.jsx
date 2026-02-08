import React from "react";
import axios from "axios";
import { BaseUrl } from "../main";

const ProductCard = ({ item }) => {

  const handlePayment = async () => {
    try {
      // 1. Create Order on Backend
      const res = await axios.post(
        `${BaseUrl}/payment/create`,
        {
          productId: item._id,
          price: item.price,
        },
        {
          withCredentials: true,
        }
      );

      const { order } = res.data;

      // 2. Open Razorpay Checkout
      const options = {
        key: "rzp_test_SCgmKKnCQEB7eM",
        amount: order.amount,
        currency: "INR",
        name: "My Shop",
        description: item.name,
        order_id: order.id,

        handler: async function (response) {
          // 3. Verify Payment
          const verify = await axios.post(
            `${BaseUrl}/payment/verify`,
            {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            },
            { withCredentials: true }
          );

          if (verify.data.success) {
            alert("Payment Successful!");
          } else {
            alert("Payment Verification Failed");
          }
        },

        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (error) {
      console.log("Payment Error:", error);
    }
  };

  return (
    <div className="border flex flex-col gap-4 p-4">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ₹{item.price}</p>
      <p>Category: {item.category}</p>

      <button className="border p-2" onClick={handlePayment}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
