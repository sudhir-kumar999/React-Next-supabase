/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState,  } from 'react'
import { myContext, useTodos } from '../store/todos'

const AddTodo = () => {
    const [todo,setTodo]=useState("")
    const {handleAddTodo}=useTodos()

    const handleForm=(e:React.SubmitEvent<HTMLElement>):void=>{
        e.preventDefault();
        handleAddTodo(todo)
        setTodo("")

    }
  return (
    <div >
      <form onSubmit={handleForm} className='flex justify-center items-center gap-4'>
        <input type="text" name='' value={todo} onChange={(e)=>setTodo(e.target.value)} className='border p-1.5 rounded'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
