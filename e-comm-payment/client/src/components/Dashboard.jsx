import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate()
    const {fetchUser,user}=useContext(myContext)
    useEffect(()=>{
    fetchUser()
    // console.log(res)
    },[])
    
    
  return (
    <div>
      Dashboard
      welcome {user.name}
      <Link to="/products">Go to Product page</Link>
      <Link to="/myorders">Go to my order</Link>

    </div>
  )
}

export default Dashboard
