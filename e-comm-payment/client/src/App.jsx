import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import Dashboard from "./components/Dashboard";
import Product from "./pages/Product";
import MyOrders from "./pages/MyOrders";

import Books from "./components/Books";
import BookDetail from "./components/BookDetail";

import Cart from "./pages/Cart"; // 👈 Cart Import

import Footer from "./components/Footer";
import AddBook from "./pages/AddBook";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        {/* BOOK ROUTES – OPEN FOR ALL */}
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["user"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myorders"
          element={
            <ProtectedRoute roles={["user"]}>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        {/* 🔥 CART ROUTE – ONLY FOR LOGGED IN USERS */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute roles={["user"]}>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-book"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AddBook />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
