import React, { useContext } from 'react'
import { products } from '../data/product'
import { cartContext } from '../context/CartContext'

const Product = () => {
    const {addToCart}=useContext(cartContext)

  return (
    <div className=' flex flex-wrap justify-center gap-4'>
      {
        products.map((ele)=>(
            <div className='  h-[200px] w-[200px] flex border flex-col' key={ele.id}>
                <img src={ele?.Image} alt="" className='m-8'/>
                <h1>{ele.name}</h1>
                <h2>{ele.price}</h2>
                <h2>{ele.description}</h2>
                <button onClick={()=>addToCart(ele)} className='border py-2'>Add To Cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Product
