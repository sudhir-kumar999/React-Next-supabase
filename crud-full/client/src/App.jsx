import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Todo from './component/Todo'
import Home from './component/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App
