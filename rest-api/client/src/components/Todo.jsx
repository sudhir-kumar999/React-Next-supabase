import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { BaseURL } from "../main";

const Todo = () => {
  // const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  // console.log(user);

  const addTodo = async () => {
    const res = await axios.post(
      `${BaseURL}/todo/create`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // 🔥 cookie ke liye (future use)
      }
    );
    // console.log(res.data);
    setTitle("");
    getTodo();
  };
  const getTodo = async () => {
    const res = await axios.get(`${BaseURL}/todo/get`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // 🔥 cookie ke liye (future use)
    });
    console.log(res.data);
    setTodo(res.data.data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const res = await axios.delete(`${BaseURL}/todo/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // 🔥 cookie ke liye (future use)
    });
    console.log(res.data.message)
    getTodo();
  };

  const handleEdit = async (todo) => {
    setEditId(todo._id);
    setEditText(todo.title);
  };
  
  
  const handleUpdate = async (id) => {
  await axios.patch(
    `${BaseURL}/todo/update/${id}`,
    { title: editText },
    { withCredentials: true }
  );

  setEditId(null);
  setEditText("");
  getTodo();
};


  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <h1 className="m-4">Todo List</h1>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-xl"
        />
        <button className="border p-2 rounded" onClick={addTodo}>
          Add
        </button>
      </div>
      <div className="m-4">
        <p>Todo Items</p>
        {todo.map((ele) => (
          <div key={ele._id} className="flex gap-4">
            {editId === ele._id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  className="border"
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(ele._id)}>save</button>
              </div>
            ) : (
              <button onClick={() => handleEdit(ele)}>Edit</button>
            )}
            <li>{ele.title}</li>
            <button>
              <input type="checkbox" />
            </button>
            <button onClick={() => handleDelete(ele._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
