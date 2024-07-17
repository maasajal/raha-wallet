import React from "react";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SendIcon from "@mui/icons-material/Send";
import SavingsIcon from "@mui/icons-material/Savings";
import { NavLink } from "react-router-dom";
import rahaWalletLogo from "../../assets/rahaWalletLogo.png";

const navLinks = [
  {
    icon: <SendIcon />,
    title: "Send Money",
    path: "/send-money",
  },
  {
    icon: <AccountBalanceWalletIcon />,
    title: "Cash Out",
    path: "/cash-out",
  },
  {
    icon: <SavingsIcon />,
    title: "Cash In",
    path: "/cash-in",
  },
  {
    icon: <SavingsIcon />,
    title: "Transaction Management",
    path: "/transaction-management",
  },
];

const Home = () => {
  return (
    <div className="text-center space-y-5">
      <div>
        <img
          src={rahaWalletLogo}
          className="logo mx-auto w-28 sm:w-30 mt-5 py-2"
          alt="Raha Wallet logo"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-Montserrat">
          Welcome to Raha Wallet!
        </h1>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {navLinks.map((nav) => (
          <NavLink
            to={nav.path}
            className="bg-[#312062] text-white p-10 rounded-full w-full flex items-center justify-center gap-5"
          >
            <p>{nav.icon}</p> <p>{nav.title}</p>
          </NavLink>
        ))}
      </section>
    </div>
  );
};

export default Home;
