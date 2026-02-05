import React from 'react'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import { Link, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Cart/> */}
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product' element={<Product/>}/>

      </Routes>
      <Link to="/product">Go to Product</Link>
      {/* <Product/> */}

    </div>
  )
}

export default App
