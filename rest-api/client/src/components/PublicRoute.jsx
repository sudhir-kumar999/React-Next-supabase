import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (user) {
    // 🔥 role ke basis pe redirect
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/" replace />;
  }

  // ❌ user ko forcefully dashboard mat bhejo
  return <Outlet />;
};
