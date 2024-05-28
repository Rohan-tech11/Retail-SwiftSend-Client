import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import {
  StyledLink,
  StyledButton,
  Logo,
  Title,
  MobileTitle,
  MobileLogo,
  DesktopLogo,
  MenuBox,
  MenuItemsBox,
} from './headerStyles';
import logo from '/logo-glyph.png';

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#292929' }}>
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          <DesktopLogo>
            <Logo src={logo} alt="logo" />
          </DesktopLogo>
          <Typography
            variant="h5"
            color={'#ff6813'}
            paddingLeft={'5px'}
            // fontWeight={'bold'}
            noWrap
            component={Title}
            href="/"
          >
            SwiftSend
          </Typography>

          <MenuItemsBox>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <StyledLink>Home</StyledLink>
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <StyledLink>About</StyledLink>
            </NavLink>
          </MenuItemsBox>
          <StyledButton
  component={NavLink}
  variant='contained'
  to="/login"
  disableRipple={true}
>
  Login
</StyledButton>


          {/* Mobile */}
          <MobileLogo>
            <Logo src={logo} alt="logo" />
          </MobileLogo>
          <Typography
            variant="h5"
            noWrap
            component={MobileTitle}
            href="/"
          >
            SwiftSend
          </Typography>

          <MenuBox sx={{ flexGrow: 1 }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography>
                  <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <StyledLink>Home</StyledLink>
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/about" style={{ textDecoration: 'none' }}>
                    <StyledLink>About</StyledLink>
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to="/login" style={{ textDecoration: 'none' }}>
                    <StyledLink>Login</StyledLink>
                  </NavLink>
                </Typography>
              </MenuItem>
            </Menu>
          </MenuBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
