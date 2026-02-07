import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { myContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate=useNavigate()
    const {signup}=useContext(myContext)
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const handleSubmit=async(e)=>{
    e.preventDefault()
  console.log(formData);
    const res=await signup(formData)
    console.log(res)
    if(res.success==true){
        navigate("/login")
    }

  }
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col shadow-xl p-8">
        <label htmlFor="email">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData,name:e.target.value})}
          className="border p-1 rounded"
        />
        
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData,email:e.target.value})}
          className="border p-1 rounded"
        />
        <label htmlFor="pass">Password : </label>
        <input
          type="text"
          id="pass"
          name="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData,password:e.target.value})}
          className="border p-1 rounded"
        />
        <button type="submit" className="border my-4 p-1">Login</button>
      </form>
    </div>
  );
};

export default Signup;
