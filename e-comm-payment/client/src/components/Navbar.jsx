import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {logout ,user}=useContext(myContext)
    const navigate=useNavigate()

    const handleLogout=()=>{
        logout()
        navigate("/login")
    }
  return (
    <div className='flex justify-between p-4 shadow-xl'>
      <h1>Logo</h1>
      <button onClick={handleLogout}>{!user ? "Login" : "Logout"}</button>
    </div>
  )
}

export default Navbar
