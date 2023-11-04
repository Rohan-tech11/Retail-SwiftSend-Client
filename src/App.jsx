import { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";

import "./App.css";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
