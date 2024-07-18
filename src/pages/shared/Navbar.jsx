import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import useAuth from "../../hooks/useAuth";

import rahaWalletLogo from "../../assets/rahaWalletLogo.png";
import userPic from "../../assets/fevicon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Transactions",
    path: "/transactions",
  },
];
const Navbar = () => {
  const { user, logOut } = useAuth();
  //   console.log(user);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    await logOut();
    navigate("/login");
  };
  const bgColor = "#653664";
  return (
    <AppBar position="static" color="">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <img
              src={rahaWalletLogo}
              className="logo mx-auto w-28 sm:w-30 mt-5 py-2"
              alt="Raha Wallet logo"
            />
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page) => (
              <MenuItem key={page.path}>
                <NavLink to={page.path}>{page.title}</NavLink>
              </MenuItem>
            ))}
          </Box>
          {user ? (
            <div className="flex gap-5 items-center">
              {user && <span className="mr-2">{user.name}</span>}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={userPic} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <NavLink key="profile" to={"/profile"}>
                    <MenuItem onClick={handleCloseNavMenu}>Profile</MenuItem>
                  </NavLink>
                  <NavLink key="accountRequest" to={"/admin/account-open"}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      Account Request
                    </MenuItem>
                  </NavLink>
                  <MenuItem key="logout" onClick={handleLogout}>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
