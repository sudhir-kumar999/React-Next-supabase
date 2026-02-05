import axios from "axios";
import React, { useState } from "react";
import { BaseURL } from "../main";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logins = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const {fetchUser} = useAuth()
  

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    const res = await axios.post(`${BaseURL}/auth/login`,{
        email,password
    },{
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // 🔥 cookie ke liye (future use)
        })
         const loggedInUser = await fetchUser();
         console.log(loggedInUser.role)
        if (loggedInUser?.role==="admin") {
  // navigate("/admin");
  navigate("/admin", { replace: true });

} else {
  navigate("/dashboard");
}
    setEmail("");
    setPassword("");
  }

  return (
    <div className="h-[90vh] flex justify-center items-center flex-col">
      <div className="m-4">
        <h1>Login Page</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border h-[40%] w-[80%] md:w-[40%] lg:w-[40%] flex flex-col justify-center  items-center"
      >
        <div className="flex flex-col max-w-[300px] w-[80%]">
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

export default Logins;
