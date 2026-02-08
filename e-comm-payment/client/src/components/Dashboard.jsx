import React from "react";
import { useContext } from "react";
import { myContext } from "../context/AuthContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Dashboard = () => {
  const { fetchUser, user } = useContext(myContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 sm:p-6 md:p-8">

      <div className="max-w-5xl mx-auto">

        {/* Welcome Banner */}
        <Alert className="mb-8 bg-white shadow-md border-l-4 border-blue-500">
          <AlertTitle className="text-xl sm:text-2xl font-semibold">
            👋 Welcome, {user?.name || "User"}
          </AlertTitle>

          <AlertDescription className="text-sm sm:text-base">
            Manage your orders and explore amazing books from your dashboard.
          </AlertDescription>
        </Alert>

        {/* Main Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Products Card */}
          <Card className="hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle>Browse Books</CardTitle>
              <CardDescription>
                Explore all books available in store
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 mb-6">
                Find your favorite books from different categories.
              </p>

              <Link to="/products">
                <Button className="w-full">
                  Go to Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Orders Card */}
          <Card className="hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle>My Orders</CardTitle>
              <CardDescription>
                View your purchase history
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 mb-6">
                Track all your previous orders in one place.
              </p>

              <Link to="/myorders">
                <Button variant="outline" className="w-full">
                  View Orders
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          Happy Reading 📚
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
