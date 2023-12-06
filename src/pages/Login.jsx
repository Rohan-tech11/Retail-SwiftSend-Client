import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { PulseLoader } from "react-spinners";

import styles from "./login.module.css";

export default function Login() {
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cookies = new Cookies();

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
            
            console.log(token);
            if (token.roles === "USER") {
              console.log("User role detected logging in");
              navigate("/user");
            } else {
              console.log("Client role detected logging in");
              // navigate("/");
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
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.headingContainer}>
          <AccountCircle />
          <p>Login</p>
        </div>
        <div className={styles.error}>{formError && formError}</div>
        <div className={styles.labelContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="john.doe@abc.com"
            className={styles.input}
            value={email}
            onChange={onEmailChange}
            onBlur={onEmailChange}
          />
        </div>
        <div className={styles.error}>
          {emailError ? "Please enter a valid email." : null}
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="xxxxxxxxxxxxx"
            className={styles.input}
            value={password}
            onChange={onPasswordChange}
            onBlur={onPasswordChange}
          />
        </div>
        <div className={styles.error}>
          {passwordError ? "Please enter a password" : null}
        </div>

        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <PulseLoader color="#fff" size={5} /> : "Login"}
        </button>
        <Link to="/signup">Don&apos;t have an account? Signup</Link>
      </form>
    </div>
  );
}
