import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="border flex flex-col gap-4">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ₹{item.price}</p>
      <p>Category: {item.category}</p>

      <button className="border">Buy Now</button>
    </div>
  );
};

export default ProductCard;
