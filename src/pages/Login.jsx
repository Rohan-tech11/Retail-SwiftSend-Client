import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
} from "@mui/material";

import { LockOutlined } from "@mui/icons-material";
import useClasses from "../hooks/useClasses";
import { useState } from "react";
import axios from "axios";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export default function Login() {
  const classes = useClasses(styles);

  const [error, setError] = useState({
    email: "",
    password: "",
    form: "",
  });
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmail = (input) => {
    let email = input.target.value;

    let regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!regex.test(email)) {
      setError((prevState) => ({
        ...prevState,
        email: "Please enter a valid email.",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        email: "",
      }));
      setFields((prevState) => ({
        ...prevState,
        email: email,
      }));
    }
  };

  const handlePassword = (event) => {
    let password = event.target.value;

    if (!password) {
      setError((prevState) => ({
        ...prevState,
        password: "Password is required.",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        password: "",
      }));
      setFields((prevState) => ({
        ...prevState,
        password: password,
      }));
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!fields.email || !fields.password) {
      setError((prevState) => ({
        ...prevState,
        form: "Email and password required.",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        form: "",
      }));
      let data = {
        email: fields.email,
        password: fields.password,
      };
      await axios({
        url: "/api/login",
        method: "post",
        headers: "application/json",
        data: data,
      })
        .then((data) => {
          console.log("Form submission", data);
          if (data.status === 200) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setError((prevState) => ({
              ...prevState,
              form: `ERROR: ${err.response.data}`,
            }));
          }
          console.log("Error in form submission", err);
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        {error.form}
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmail}
          />
          {error.email}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassword}
          />
          {error.password}
          <br />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {"Forgot password?"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
