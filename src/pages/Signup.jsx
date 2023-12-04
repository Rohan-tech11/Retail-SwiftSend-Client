import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";

import styles from "./Signup.module.css";

export default function Signup() {
  let nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("mthite5161@conestogac.on.ca");
  const [phone, setPhone] = useState("5195008854");
  const [password, setPassword] = useState("Abc123!@");
  const [confirmPassword, setConfirmPassword] = useState("Abc123!@");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
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
    if (password != value) {
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
      passwordError ||
      confirmPasswordError
    ) {
      console.log("check error", true);
      return true;
    } else if (!name || !email || !phone || !password || !confirmPassword) {
      console.log("check values", true);
      return true;
    } else {
      console.log("No errors");
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
        fullName: name,
        email: email,
        mobileNumber: phone,
        password: password,
      };

      await axios({
        method: "post",
        url: "/api/register/user",
        data: data,
      })
        .then((res) => {
          setIsLoading(false);
          console.log("In user registration:", res);

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
          <p>Signup</p>
        </div>
        <div className={styles.error}>{formError && formError}</div>
        <div className={styles.labelContainer}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className={styles.input}
            value={name}
            onChange={onNameChange}
          />
        </div>
        <div className={styles.error}>
          {nameError ? "Please enter a valid name." : null}
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
          <label htmlFor="phone" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="9876543210"
            className={styles.input}
            value={phone}
            onChange={onPhoneChange}
            onBlur={onPhoneChange}
          />
        </div>
        <div className={styles.error}>
          {phoneError ? "Please enter a valid number." : null}
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
          {passwordError
            ? "Password should have 1 uppercase, 1 lowercase, 1 symbol and 8 characters."
            : null}
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="xxxxxxxxxxxxx"
            className={styles.input}
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
        </div>
        <div className={styles.error}>
          {confirmPasswordError
            ? "Password and confirm password should match."
            : null}
        </div>

        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <PulseLoader color="#fff" size={5} /> : "Signup"}
        </button>
        <Link to="/login">Alread have an account? Login Here</Link>
      </form>
    </div>
  );
}
