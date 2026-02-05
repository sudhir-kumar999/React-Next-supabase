import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BaseURL } from "../main";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${BaseURL}/auth/me`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setUser(res.data.user);
        return res.data.user;
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
  try {
    await axios.post(
      `${BaseURL}/auth/logout`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    console.log(error);
  } finally {
    setUser(null); // 🔥 poori app logout
  }
};

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user,fetchUser, isAuthenticated: !!user, loading, setUser,logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
