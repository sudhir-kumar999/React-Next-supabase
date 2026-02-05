import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Logins from "./components/Logins";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PublicRoute } from "./components/PublicRoute";
import Notfound from "./components/Notfound";
import Todo from "./components/Todo";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Navbar />
      <Routes>
  {/* 🌐 PUBLIC */}
  <Route element={<PublicRoute />}>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Logins />} />
    <Route path="/signup" element={<Signup />} />
  </Route>

  {/* 🔐 USER + ADMIN */}
  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/todo" element={<Todo />} />
  </Route>

  {/* 🔐 ADMIN ONLY */}
  <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
    <Route path="/admin" element={<AdminPanel />} />
  </Route>

  <Route path="*" element={<Notfound />} />
</Routes>
    </div>
  );
}

export default App;
