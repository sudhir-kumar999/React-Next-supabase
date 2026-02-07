import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center h-[90vh] items-center gap-4">
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Home;
