import { AccountCircle } from "@mui/icons-material";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formError, setFormError] = useState(false);

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

  function handleSubmit(event) {
    event.preventDefault();
    let error = isError();
    if (!error) {
      setFormError(false);

      let data = {
        email: email,
        password: password,
      };

      console.log(data);
      navigate("/");
    } else {
      setFormError(true);
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.headingContainer}>
          <AccountCircle />
          <p>Login</p>
        </div>
        <div className={styles.error}>
          {formError ? "Please fill all details" : null}
        </div>
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

        <button className={styles.button} onClick={handleSubmit}>
          Login
        </button>
        <Link to="/login">Don&apos;t have an account? Login Here</Link>
      </form>
    </div>
  );
}
