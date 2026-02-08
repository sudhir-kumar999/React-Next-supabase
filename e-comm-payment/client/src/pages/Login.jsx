import React, { useContext, useState } from "react";
import { myContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle } from "@/components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(myContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(formData);

    if (res.success === true) {
      navigate("/dashboard");
    } else {
      setError(res.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex justify-center items-center px-4">

      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Login to Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          {error && (
            <Alert className="mb-4 text-red-600 border-red-400">
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>

        </CardContent>
      </Card>

    </div>
  );
};

export default Login;
