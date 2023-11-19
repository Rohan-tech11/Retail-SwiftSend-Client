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
import axios from "axios";
import { useState } from "react";

const styles = (theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export default function SignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    nameValid: false,
    emailValid: false,
    passwordValid: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const validateInput = () => {
    let nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
    let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    console.log(nameRegex.test(state.name));

    if (!nameRegex.test(state.name)) {
      setState((prevProps) => ({
        ...prevProps,
        nameValid: false,
      }));
    } else if (!emailRegex.test(state.email)) {
      setState((prevProps) => ({
        ...prevProps,
        emailValid: false,
      }));
    } else if (!passwordRegex.test(state.password)) {
      setState((prevProps) => ({
        ...prevProps,
        passwordValid: false,
      }));
    } else {
      return true;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = validateInput();
    
    if (valid) {
      let data = {
        name: state.name,
        email: state.email,
        password: state.password,
      };

      await axios({
        url: "/signup",
        method: "post",
        data: data,
        headers: "application/json",
      })
        .then(() => {
          console.log("Registered successfully!", data);
        })
        .catch((err) => {
          console.log("Error register user: ", err);
        });
    }
    console.log(state);
  };

  const classes = useClasses(styles);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                value={state.name}
                onChange={handleInputChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" required />
                }
                label="I Agree to the terms and conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
