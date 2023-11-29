import { AccountCircle } from "@mui/icons-material";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";

export default function ClientSignup() {
  let nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
  let emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe1@gmail.com");
  const [phone, setPhone] = useState("5195195191");
  const [registry, setRegisty] = useState("202020202020200");
  const [location, setLocation] = useState("King St, Waterloo, ON");
  const [password, setPassword] = useState("Abc1234!@");
  const [confirmPassword, setConfirmPassword] = useState("Abc1234!@");

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

    setRegisty(value);
    if (value.length != 15) {
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
      registryError ||
      locationError ||
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
      setFormError(false);

      let data = {
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
          if (res.data.httpStatus !== "CREATED") {
            switch (res.status) {
              case 400:
                setFormError("ERROR: Account already exists.");
                break;
              default:
                setFormError(
                  "ERROR: Invalid or incomplete information submitted."
                );
                break;
            }
          }
          setIsLoading(false);
          console.log(res);
        })
        .catch((err) => {
          setIsLoading(false);
          switch (err.response.status) {
            case 400:
              setFormError("ERROR: Account already exists.");
              break;
            default:
              setFormError(
                "ERROR: Invalid or incomplete information submitted."
              );
              break;
          }
          console.log("Error logging in", err);
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
            Organization Name
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
          <label htmlFor="registry" className={styles.label}>
            Business Number
          </label>
          <input
            type="text"
            name="registry"
            id="registry"
            placeholder="000000000000000"
            className={styles.input}
            value={registry}
            onChange={onRegistryChange}
            onBlur={onRegistryChange}
          />
        </div>
        <div className={styles.error}>
          {registryError ? "Please enter a valid business number." : null}
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="location" className={styles.label}>
            Local HQ Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Street, Province, Country"
            className={styles.input}
            value={location}
            onChange={onLocationChange}
            onBlur={onLocationChange}
          />
        </div>
        <div className={styles.error}>
          {locationError ? "Please enter a valid business number." : null}
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
