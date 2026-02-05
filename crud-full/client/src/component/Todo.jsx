import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit ,setEdit]= useState(false)
  const [editId, setEditId] = useState(null);

  async function handleSubmit(e) {
    console.log(title);
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/todo/create",
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    setTitle("");
    getTodo()
    console.log(res.data);
  }

  async function getTodo() {
    const res = await axios.get("http://localhost:5000/todo/get")
    setTodo(res.data.data);
  }

  async function handleDelete(id){
     const res=await axios.delete(`http://localhost:5000/todo/delete/${id}`)
     alert(res.data.message)
     getTodo()
  }

  async function handleupdate(e){
    e.preventDefault()
    setEdit(true)
    const res= await axios.patch(`http://localhost:5000/todo/update/${editId}`,{
        title
    },{
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    })
    alert(res.data.message)
    getTodo()
    setEdit(false)
    setEditId(null)
    setTitle("")
  }
  function handleEdit(id,item){
    setEditId(id)
    setTitle(item)
    setEdit(true)

  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="flex justify-center gap-4 m-4 flex-col items-center">
      <div className="flex justify-center items-center">
        <h1>Todo Page</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-xl p-2"
        />
        {!edit?<button type="submit" className="border p-2 rounded-lg">
          Add
        </button>:<button className="border p-2 rounded-lg" onClick={handleupdate}>Update</button>
        }
      </form>
      <div className="flex flex-col justify-center items-center">
        <h1>All Todo Items</h1>
        {todo.map((ele) => (
          <div key={ele._id} className="flex justify-center items-center">
            <li>{ele.title}</li>
            <button onClick={()=>handleEdit(ele._id , ele.title)} className="border m-2 rounded p-2">Edit</button>
            <button onClick={()=>handleDelete(ele._id)} className="border m-2 rounded p-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
