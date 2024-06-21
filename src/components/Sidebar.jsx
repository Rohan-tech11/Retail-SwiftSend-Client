import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { client, user } from "./NavData";
import getAuthToken from "../utils/auth";
import { jwtDecode } from "jwt-decode";
import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#292929",
    },
    secondary: {
      main: "#ff6813",
      dark: "#e05700",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
    action: {
      selected: "#444444",
    },
  },
});

const Navbar = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  backgroundColor: theme.palette.primary.main,
}));

const NavMenuItems = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  padding: 0,
}));

const NavText = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  "&.active": {
    backgroundColor: theme.palette.action.selected,
  },
}));

function Sidebar({ sidebar, setSidebar, role }) {
  const theme = useTheme();
  const toggleSidebar = () => setSidebar(!sidebar);

  const [menu, setMenu] = useState(client);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setToken(jwtDecode(getAuthToken().token));
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Navbar></Navbar>
        <List>
          {(token.roles === "USER" ? user : client).map((item, index) => (
            <ListItem
              button
              key={index}
              component={NavText}
              to={item.path}
              activeClassName="active"
            >
              <ListItemIcon style={{ color: "#ff6813" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{ style: { color: "#ffffff" } }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Link to="/logout" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button>
            <ListItemIcon style={{ color: "#ff6813" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ style: { color: "#ffffff" } }}
            />
          </ListItem>
        </Link>
      </Box>
    </ThemeProvider>
  );
}

export default Sidebar;
