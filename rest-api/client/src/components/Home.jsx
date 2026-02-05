import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const naviagate = useNavigate()
  return (
    <div>
      <button onClick={()=>naviagate("/login")}>Login Page</button>
    </div>
  );
};

export default Home;
