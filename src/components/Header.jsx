import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
// import useClasses from "../hooks/useClasses";

import styles from './Header.module.css';

import logo from "/logo-glyph.png";

// const styles = (theme) => ({
//   link: {
//     textDecoration: "none",
//     color: "#fff",
//     margin: theme.spacing(1),
//     padding: "10px",
//   },
//   hover: {
//     textDecoration: "none",
//     color: theme.palette.primary.main,
//     margin: theme.spacing(1),
//     padding: "10px",
//   },
// });

export default function Header() {
  // const classes = useClasses(styles);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          {/* Mobile */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={logo} alt="logo" height="30px" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SwiftSend
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="main menu"
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>
                  <NavLink
                    to="/"
                    className={styles.link}
                  >
                    Home
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink
                    to="/about"
                    className={styles.link}
                  >
                    About
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink
                    to="/login"
                    className={styles.link}
                  >
                    Login
                  </NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* desktop */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={logo} alt="logo" height="30px" />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SwiftSend
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <NavLink
              to="/"
              className={styles.link}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={styles.link}
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className={styles.link}
            >
              Login
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
