import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { BaseUrl } from "../main";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const myContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const login = async (formData) => {
    const { email, password } = formData;
    const res = await axios.post(
      `${BaseUrl}/auth/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(res.data.message);
    await fetchUser(); // login ke baad user fetch karo
    return res.data;
  };

  const signup = async (formData) => {
    const { name, email, password } = formData;
    const res = await axios.post(
      `${BaseUrl}/auth/register`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(res.data.message);
    return res.data;
  };

  const logout = async () => {
    try {
      await axios.post(
        `${BaseUrl}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      setUser("");
      navigate("/login");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/auth/fetch`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      setUser(res.data.data);
      console.log(res.data);
      //   return res.data.data;
    } catch (error) {
      // 🔥 MOST IMPORTANT PART
      setUser("");
    } finally {
    setLoading(false);
  }
  };
  useEffect(() => {
    fetchUser();
  }, []);

//   useEffect(() => {
//     if (user) {
//       navigate("/dashboard");
//     } else {
//       navigate("/login");
//     }
//   }, [user]);

  return (
    <myContext.Provider value={{ login, signup, fetchUser, user, logout,loading }}>
      {children}
    </myContext.Provider>
  );
};
