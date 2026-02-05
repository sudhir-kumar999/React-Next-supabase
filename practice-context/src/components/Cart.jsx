import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeCart, incre, decre ,totalPrice } = useContext(cartContext);
  
    console.log(totalPrice())
  return (
    <div>
        <h1>Total Price :{ totalPrice() ||0}</h1>
    <div className=" flex flex-wrap justify-center gap-4">
        
      {cart.map((ele) => (
        <div
          className="  h-[200px] w-[200px] flex border flex-col"
          key={ele.id}
        >
          <img src={ele?.Image} alt="" className="m-8" />
          <div className="flex gap-4 m-2">
            <button
              onClick={() => incre(ele)}
              className="border px-2 py-1 rounded"
            >
              +
            </button>
            <h1>{ele.qty}</h1>
            <button
              onClick={() => decre(ele)}
              className="border px-2 py-1 rounded"
            >
              -
            </button>
          </div>
          <h1>{ele.name}</h1>
          <h2>{ele.price}</h2>
          {/* <h2>{ele.description}</h2> */}
          <button onClick={() => removeCart(ele)} className="border py-2">
            Remove
          </button>
        </div>
      ))}
      </div>
    </div>
    
  );
};

export default Cart;
