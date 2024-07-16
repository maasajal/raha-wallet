import React from "react";
import Login from "../Login/Login";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="text-center space-y-5">
      {user ? (
        <div className="my-10">
          <h1 className="text-3xl font-bold">Welcome to Raha Wallet!</h1>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Home;
