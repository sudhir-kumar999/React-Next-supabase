import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { myContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, roles }) => {
  const { user, loading } = useContext(myContext);

  console.log(user.role)
  if (loading) {
    return <h3>Loading...</h3>;
  }

  // Agar user object hi nahi
  if (!user || !user.role) {
    return <Navigate to="/login" />;
  }

  // Role check sirf tab jab roles pass kiya gaya ho
  if (roles && roles.length > 0) {
    const userRole = user.role;

    if (!roles.includes(userRole)) {
      return <Navigate to="/unauthorized" />;
    }
  }

  return children;
};

export default ProtectedRoute;
