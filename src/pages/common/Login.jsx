import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import login from "../../assets/login.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { PulseLoader } from "react-spinners";

import styles from "./Login.module.css";
import getAuthToken from "../../utils/auth";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#292929",
    },
    secondary: {
      main: "#ff6813",
      dark: "#e05700",
    },
  },
});

export default function Login() {
  const cookies = new Cookies();

  const { cookie, token } = getAuthToken();

  if (token || cookie) {
    localStorage.clear();
    cookies.remove("jwt");
  }

  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function onEmailChange(event) {
    let value = event.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  function onPasswordChange(event) {
    let value = event.target.value;
    setPassword(value);
    if (!value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }

  const navigate = useNavigate();

  function isError() {
    if (emailError && passwordError) {
      return true;
    } else if (!email || !password) {
      return true;
    } else {
      return false;
    }
  }

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          SwiftSend
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    let error = isError();
    if (!error) {
      setFormError("");

      let data = {
        email: email,
        password: password,
      };

      await axios({
        method: "post",
        url: "/api/register/login",
        data: data,
      })
        .then((res) => {
          setIsLoading(false);

          if (res.data.jwt) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${res.data.jwt}`;

            cookies.set("jwt", res.data.jwt, { path: "/" });

            localStorage.setItem("token", res.data.jwt);

            let token = jwtDecode(res.data.jwt);

            console.log(res);
            if (token.roles === "USER") {
              navigate("/user");
            } else {
              navigate("/client");
            }
          } else {
            console.log("No jwt in login", res);
          }
        })
        .catch((err) => {
          setIsLoading(false);

          switch (err.response.status) {
            case 400:
              setFormError(
                "ERROR: Invalid credentials or Account does not exist."
              );
              break;
            case 401:
              setFormError(
                "ERROR: Unauthorized request or server unreachable."
              );
              break;
            case 500:
              setFormError("ERROR: The server is unreachable.");
              break;
            default:
              setFormError(
                "ERROR: Invalid or incomplete information submitted."
              );
              break;
          }
          console.log("Error signing up", err);
        });
    } else {
      setIsLoading(false);
      setFormError("Please fix form errors. All fields mandatory");
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          md={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
          }}
        >
          <img
            src={login}
            alt="login"
            style={{ width: "60%", height: "60%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div className={styles.error}>{formError && formError}</div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                sx={{ mb: 2 }}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onEmailChange}
                onBlur={onEmailChange}
                autoFocus
              />
              <div className={styles.error}>
                {emailError ? "Please enter a valid email." : null}
              </div>

              <TextField
                margin="normal"
                required
                fullWidth
                sx={{ mb: 2 }}
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={onPasswordChange}
                onBlur={onPasswordChange}
                autoComplete="current-password"
              />
              <div className={styles.error}>
                {passwordError ? "Please enter a password" : null}
              </div>

              <Button
                type="submit"
                fullWidth
                onClick={handleSubmit}
                variant="contained"
                disabled={isLoading}
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "secondary.main",
                  "&:hover": {
                    bgcolor: "secondary.dark",
                  },
                }}
              >
                {isLoading ? <PulseLoader color="#fff" size={5} /> : "Sign In"}
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
