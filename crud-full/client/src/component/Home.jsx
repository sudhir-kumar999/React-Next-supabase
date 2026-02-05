import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home Page
      <Link to="/todo">Todo page</Link>
    </div>
  )
}

export default Home
