import { createContext, useState } from "react";

export const cartContext = createContext();

export const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist=cart.find((ele)=>(
        ele.id==item.id
    ))
    if(exist){
        setCart(
            cart.map((ele)=>(
                ele.id===item.id ?{...ele, qty:ele.qty+1} :ele
            ))
        )
    }else{
    setCart([...cart,{...item,qty:1}])
    }
    
  };
  const removeCart=(item)=>{
    let newCart=cart.filter((ele)=>(
        item.id!==ele.id
    ))
    setCart(newCart)
  }

  const incre=(item)=>{
    const exist =cart.find((ele)=>(
        ele.id===item.id
    ))
    if(exist){
        setCart(cart.map((ele)=>(
            ele.id===item.id ? {...ele,qty:ele.qty+1} :ele
        )))
    }else{
        setCart(item)
    }
  }
  const decre=(item)=>{
    const exist=cart.find((ele)=>(
        ele.id===item.id
    ))
    if(exist){
        setCart(cart.map((ele)=>(
            ele.id===item.id ? {...ele,qty:ele.qty-1} :ele
        )))
    }else{
        setCart(cart)
    }
  }

  const totalPrice=()=>{
    const price=cart.reduce((acc,ele)=>(
        acc+=ele.price*ele.qty
    ),0)
    return price
  }
  console.log(cart)

  return (
    <cartContext.Provider value={{cart,addToCart , removeCart ,incre,decre,totalPrice}}>
        {children}
    </cartContext.Provider>
  )
};

