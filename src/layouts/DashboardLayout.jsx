import { Outlet, json } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Drawer, Box, CssBaseline, AppBar as MuiAppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import getAuthToken from "../utils/auth";
import Sidebar from "../components/Sidebar";

import logo from '../assets/logo.png';
import {
  Logo,
  DesktopLogo,
} from '../components/headerStyles';



const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DashboardLayout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const { cookie, token } = getAuthToken();

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    } else {
      throw json("Unauthorized.", 401);
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar style={{ backgroundColor: '#292929'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon style={{ color: '#ff6813'}} />
          </IconButton>
          <Typography variant="h6" style={{ color: '#ff6813'}} noWrap component="div">
            Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} /> {/* Pushes the logo to the right */}
          <DesktopLogo>
            <Logo src={logo} alt="logo" style={{ width: '200px', height: '70px' }} />
          </DesktopLogo>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: '#ff6813' }} /> : <ChevronRightIcon style={{ color: '#ff6813' }} />}
          </IconButton>
        </DrawerHeader>
        <Sidebar sidebar={open} setSidebar={setOpen} role={user.roles} />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
