import React from "react";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SendIcon from "@mui/icons-material/Send";
import SavingsIcon from "@mui/icons-material/Savings";
import PeopleIcon from "@mui/icons-material/People";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

import { NavLink } from "react-router-dom";
import rahaWalletLogo from "../../assets/rahaWalletLogo.png";
import useAgent from "../../hooks/useAgent";
import useUser from "../../hooks/useUser";
import useAdmin from "../../hooks/useAdmin";

const userNav = [
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
    icon: <ListAltIcon />,
    title: "My Transactions",
    path: "/transactions",
  },
];
const agentNav = [
  {
    icon: <PointOfSaleIcon />,
    title: "Transaction Management",
    path: "/transaction-management",
  },
  {
    icon: <ListAltIcon />,
    title: "My Transactions",
    path: "/transactions",
  },
  {
    icon: <SavingsIcon />,
    title: "Request to Cash In",
    path: "/agent-cash-in",
  },
];
const adminNav = [
  {
    icon: <PeopleIcon />,
    title: "All Accounts",
    path: "/all-account",
  },
  {
    icon: <ManageAccountsIcon />,
    title: "Account Open Request",
    path: "/admin/account-open",
  },
  {
    icon: <ListAltIcon />,
    title: "All Transactions",
    path: "/transactions",
  },
];
const Home = () => {
  const [isAgent] = useAgent();
  const [isUser] = useUser();
  const [isAdmin] = useAdmin();
  return (
    <div className="text-center space-y-5 sm:min-h-screen">
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
        {isUser && (
          <>
            {userNav.map((nav) => (
              <NavLink
                key={nav.path}
                to={nav.path}
                className="bg-[#312062] text-white p-10 rounded-full w-full flex items-center justify-center gap-5"
              >
                <p>{nav.icon}</p> <p>{nav.title}</p>
              </NavLink>
            ))}
          </>
        )}
        {isAgent && (
          <>
            {agentNav.map((nav) => (
              <NavLink
                key={nav.path}
                to={nav.path}
                className="bg-[#312062] text-white p-10 rounded-full w-full flex items-center justify-center gap-5"
              >
                <p>{nav.icon}</p> <p>{nav.title}</p>
              </NavLink>
            ))}
          </>
        )}
        {isAdmin && (
          <>
            {adminNav.map((nav) => (
              <NavLink
                key={nav.path}
                to={nav.path}
                className="bg-[#312062] text-white p-10 rounded-full w-full flex items-center justify-center gap-5"
              >
                <p>{nav.icon}</p> <p>{nav.title}</p>
              </NavLink>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
