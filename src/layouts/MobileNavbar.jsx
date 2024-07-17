import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [value, setValue] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navLinks = [
    {
      icon: <HomeIcon />,
      title: "Home",
      path: "/",
    },
    {
      icon: <HistoryIcon />,
      title: "Transactions",
      path: "/transactions",
    },
    {
      icon: <AccountCircleIcon />,
      title: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div>
      <footer className="bg-[#653664] z-50">
        <BottomNavigation
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          value={value}
          onChange={handleChange}
        >
          {navLinks.map((nav) => (
            <BottomNavigationAction
              key={nav.path}
              label={nav.title}
              value={nav.path}
              icon={nav.icon}
              component={NavLink}
              to={nav.path}
            />
          ))}
        </BottomNavigation>
      </footer>
    </div>
  );
};
export default MobileNavbar;
