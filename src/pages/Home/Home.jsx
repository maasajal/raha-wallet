import React from "react";
import rahaWalletLogo from "../../assets/rahaWalletLogo.png";

const Home = () => {
  return (
    <div className="text-center space-y-5 font-Roboto">
      <div>
        <a href="https://react.dev" target="_blank">
          <img
            src={rahaWalletLogo}
            className="logo mx-auto w-40 sm:w-60 mt-5"
            alt="Raha Wallet logo"
          />
        </a>
      </div>
      <h1 className="text-2xl font-bold font-Montserrat">
        Welcome to Raha Wallet!
      </h1>
      <p className="read-the-docs">A Mobile Finance Service (MFS)</p>
    </div>
  );
};

export default Home;
