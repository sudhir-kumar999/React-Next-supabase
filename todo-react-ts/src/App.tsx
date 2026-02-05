// import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div >
      <h1 className='flex justify-center flex-col items-center m-5'>TODO REACT + TYPESCRIPT</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
