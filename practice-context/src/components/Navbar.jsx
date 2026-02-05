import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 border'>
      <div>Logo</div>
      <Link to="/cart" className='border px-3 py-2 rounded'>Cart</Link>
    </div>
  )
}

export default Navbar
