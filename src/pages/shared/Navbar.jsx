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
import { Link, NavLink, useNavigate } from "react-router-dom";

const pages = [
  {
    title: "Send Money",
    path: "send-money",
  },
  {
    title: "Cash Out",
    path: "cash-out",
  },
  {
    title: "Cash In",
    path: "cash-in",
  },
  {
    title: "Account Open",
    path: "/admin/account-open",
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
  const bgColor = "#653664"
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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path}>
                  <NavLink to={page.path}>{page.title}</NavLink>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <MenuItem key={page.path}>
                <NavLink to={page.path}>{page.title}</NavLink>
              </MenuItem>
            ))} */}
          </Box>
          {user ? (
            <div className="flex gap-5 items-center">
              {user && <span className="mr-2">{user.name}</span>}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="../../assets/fevicon.png" />
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
                  <MenuItem key="1" onClick={handleCloseUserMenu}>
                    <NavLink to={"/profile"}>Profile</NavLink>
                  </MenuItem>
                  <MenuItem key="2" onClick={handleCloseUserMenu}>
                    <NavLink to={"/transactions"}>Transactions</NavLink>
                  </MenuItem>
                  <MenuItem key="accountRequest" onClick={handleCloseUserMenu}>
                    <NavLink to={"/admin/account-open"}>
                      Account Request
                    </NavLink>
                  </MenuItem>
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
