import { createContext, useContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const signUp = async (data) => {
    try {
      setLoading(true);
      const res = await axiosPublic.post("/signup", data);
      setUser(res.data);
      return res.data;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const logIn = async (data) => {
    try {
      const res = await axiosPublic.post("/login", data);
      if (res.data.token) {
        localStorage.setItem("access-token", res.data.token);
        const verifyResponse = await axiosPublic.post("/verify-token", {
          token: res.data.token,
        });
        setUser(verifyResponse.data.user);
      }
    } catch (error) {
      console.log("Error logging in:", error);
      throw error;
    }
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("access-token");
    setUser(null);
    setLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      axiosPublic
        .post("/verify-token", { token })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch(() => {
          localStorage.removeItem("access-token");
          setUser(null);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    signUp,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
