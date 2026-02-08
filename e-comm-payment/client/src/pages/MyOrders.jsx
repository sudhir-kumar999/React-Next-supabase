import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../main";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/orders/my`, { withCredentials: true })
      .then((res) => setOrders(res.data.orders));
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map((o) => (
        <div key={o._id}>
          <h4>{o.productId.name}</h4>
          <p>Amount: ₹{o.amount}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
