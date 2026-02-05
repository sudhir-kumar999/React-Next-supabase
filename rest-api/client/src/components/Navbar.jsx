import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const {user , logout ,loading} = useAuth()
    const navigate = useNavigate()

    if(loading){
        return <div className='h-[100vh] justify-center items-center'><p>loading</p></div>
    }
  return (
    <div className='flex justify-between p-3 shadow-xl'>
      <div>
        <h1>Logo</h1>
      </div>
      <div className='flex gap-4'>
        {user ?
        <button onClick={()=>logout()}>Logout</button>
         :
        <><Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link></>
}
      </div>
    </div>
  )
}

export default Navbar
