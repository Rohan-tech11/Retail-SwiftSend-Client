import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { PulseLoader } from "react-spinners";
import getAuthToken from "../../utils/auth";
import partnerSignup from "../../assets/partnerSignup.png";

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  Grid,
  CssBaseline,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#292929',
    },
    secondary: {
      main: '#ff6813',
      dark: '#e05700',
    },
  },
});

export default function ClientSignup() {
  const cookies = new Cookies();

  const { cookie, token } = getAuthToken();

  if (token || cookie) {
    localStorage.clear();
    cookies.remove("jwt");
  }

  let nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registry, setRegistry] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [registryError, setRegistryError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onNameChange(event) {
    let value = event.target.value;
    setName(value);
    if (!nameRegex.test(value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }
  function onEmailChange(event) {
    let value = event.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }
  function onPhoneChange(event) {
    let value = event.target.value;
    setPhone(value);
    if (!phoneRegex.test(value)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  }
  function onRegistryChange(event) {
    let value = event.target.value;
    setRegistry(value);
    if (value.length !== 15) {
      setRegistryError(true);
    } else {
      setRegistryError(false);
    }
  }
  function onLocationChange(event) {
    let value = event.target.value;
    setLocation(value);
    if (!value) {
      setLocationError(true);
    } else {
      setLocationError(false);
    }
  }
  function onPasswordChange(event) {
    let value = event.target.value;
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }
  function onConfirmPasswordChange(event) {
    let value = event.target.value;
    setConfirmPassword(value);
    if (password !== value) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  }

  const navigate = useNavigate();

  function isError() {
    if (
      nameError ||
      emailError ||
      phoneError ||
      registryError ||
      locationError ||
      passwordError ||
      confirmPasswordError
    ) {
      return true;
    } else if (!name || !email || !phone || !registry || !location || !password || !confirmPassword) {
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    let error = isError();

    if (!error) {
      setFormError("");

      const data = {
        businessName: name,
        email: email,
        mobileNumber: phone,
        businessRegistryId: registry,
        registeredOfficeLocation: location,
        password: password,
      };

      await axios({
        method: "post",
        url: "/api/register/client",
        data: data,
      })
        .then((res) => {
          setIsLoading(false);
          navigate("/verify");
        })
        .catch((err) => {
          setIsLoading(false);

          switch (err.response.status) {
            case 400:
              setFormError("ERROR: Account already exists.");
              break;
            case 401:
              setFormError(
                "ERROR: Invalid data or unreachable server. Try again."
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
        });
    } else {
      setIsLoading(false);
      setFormError("Please fix form errors. All fields mandatory");
    }
  }

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          SwiftSend
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <AccountCircle />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: 'primary.main'}}>
            Partner with Us as a Service Provider
            </Typography>
            {formError && <Alert severity="error">{formError}</Alert>}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%', maxWidth: 360 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Organization Name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={onNameChange}
                error={nameError}
                helperText={nameError ? "Please enter a valid name." : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onEmailChange}
                error={emailError}
                helperText={emailError ? "Please enter a valid email." : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
                value={phone}
                onChange={onPhoneChange}
                error={phoneError}
                helperText={phoneError ? "Please enter a valid number." : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="registry"
                label="Registry ID"
                name="registry"
                autoComplete="registry"
                value={registry}
                onChange={onRegistryChange}
                error={registryError}
                helperText={registryError ? "Enter your 15-character registry ID." : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="location"
                label="Office Location"
                name="location"
                autoComplete="location"
                value={location}
                onChange={onLocationChange}
                error={locationError}
                helperText={locationError ? "Please enter the registered office location." : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onPasswordChange}
                error={passwordError}
                helperText={passwordError ? "Minimum eight characters, at least one letter, one number and one special character." : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
                error={confirmPasswordError}
                helperText={confirmPasswordError ? "Passwords do not match." : ""}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'secondary.main',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                  },
                  width: '100%',
                  maxWidth: 360,
                }}
            disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={24} /> : "Sign Up"}
              </Button>
              <Box sx={{ textAlign: 'center', width: '100%' }}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Typography variant="body2">Already have an account? Login Here</Typography>
                </Link>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={7}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          }}
        >
          <img
            src={partnerSignup}
            alt="signup"
            style={{ width: '60%', height: '60%', objectFit: 'cover' }}
          />
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}
