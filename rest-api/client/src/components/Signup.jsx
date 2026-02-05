import axios from "axios";
import React, { useState } from "react";
import { BaseURL } from "../main";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post(`${BaseURL}/auth/register`, {
      name,
      email,
      password,
    },
    {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // 🔥 cookie ke liye (future use)
        });
    console.log(name, email, password);
        console.log(res.data)
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="h-[90vh] flex justify-center items-center flex-col">
      <div className="m-4">
        <h1>Sign up Page</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border h-[40%] w-[80%] md:w-[40%] lg:w-[40%] flex flex-col justify-center  items-center"
      >
        <div className="flex flex-col max-w-[300px] w-[80%]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border"
          />
          <label htmlFor="pass">Password</label>
          <input
            type="text"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border"
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
