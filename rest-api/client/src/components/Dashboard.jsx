import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-[100vh] justify-center items-center">
        <p>loading</p>
      </div>
    );
  }
  // console.log(user);
  return <div>dashboard welcome {user?.name}
  <Link to="/todo">Go to Todo</Link>
  </div>;
};

export default Dashboard;
