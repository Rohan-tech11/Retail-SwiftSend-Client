import { LocalShipping } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";

import styles from "./AddService.module.css";
import getAuthToken from "../../utils/auth";

export default function AddService() {
  let serviceNameRegex = /^(?![\s.]+$)[a-zA-Z0-9\s.]*$/;

  const [serviceName, setServiceName] = useState("Express Courier");
  const [description, setDescription] = useState(
    "Some service description sdsfsfsdfsf sdfsdfsdf sdfsdf"
  );
  const [estimatedDeliveryDuration, setEstimatedDeliveryDuration] = useState(5);
  const [price, setPrice] = useState("");
  const [serviceType, setServiceType] = useState("Domestic");

  const [serviceNameError, setServiceNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [deliveryError, setDeliveryError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [serviceTypeError, setServiceTypeError] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onServiceNameChange(event) {
    let value = event.target.value;
    setServiceName(value);
    if (!value || !serviceNameRegex.test(value)) {
      setServiceNameError(true);
    } else {
      setServiceNameError(false);
    }
  }
  function onDescriptionChange(event) {
    let value = event.target.value;
    setDescription(value);
    if (!isNaN(value) || !value) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
  }
  function onDeliveryChange(event) {
    let value = event.target.value;

    setEstimatedDeliveryDuration(value);
    if (!value || isNaN(value)) {
      setDeliveryError(true);
    } else {
      setDeliveryError(false);
    }
  }
  function onPriceChange(event) {
    let value = event.target.value;
    setPrice(value);

    if (!value) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  }
  function onServiceTypeChange(event) {
    let value = event.target.value;
    console.log(value);

    setServiceType(value);
    if (!value) {
      setServiceTypeError(true);
    } else {
      setServiceTypeError(false);
    }
  }

  const navigate = useNavigate();

  function backHandler() {
    return navigate("..");
  }

  function isError() {
    if (
      serviceNameError ||
      descriptionError ||
      deliveryError ||
      priceError ||
      serviceTypeError
    ) {
      console.log("check error", true);
      return true;
    } else if (
      !serviceName ||
      !description ||
      !estimatedDeliveryDuration ||
      !price ||
      !serviceType
    ) {
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

      console.log(axios.defaults);

      const token = getAuthToken().token;
      console.log(token);

      let data = {
        serviceName: serviceName,
        serviceDescription: description,
        deliveryTimeDays: estimatedDeliveryDuration,
        serviceType: serviceType,
        price: price,
      };

      await axios({
        method: "post",
        url: "/api/clients/addService",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        data: data,
      })
        .then((res) => {
          setIsLoading(false);
          navigate("client/services");
          console.log(res);
        })
        .catch((err) => {
          setIsLoading(false);
          switch (err.response.status) {
            case 400:
              setFormError("ERROR: Server is unresponsive.");
              break;
            case 401:
              setFormError("ERROR: Client not approved by admin.");
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
          console.log("Error adding service", err);
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
          <LocalShipping />
          <p>Add a service</p>
        </div>
        <div className={styles.error}>{formError && formError}</div>
        <div className={styles.labelContainer}>
          <label htmlFor="name" className={styles.label}>
            Service Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Express Courier B40"
            className={styles.input}
            value={serviceName}
            onChange={onServiceNameChange}
          />
        </div>
        <div className={styles.error}>
          {serviceNameError ? "Please enter a valid name." : null}
        </div>
        <div className={styles.labelContainer}>
          <label htmlFor="description" className={styles.label}>
            Service Description
          </label>
          <textarea
            rows="4"
            cols="26"
            name="description"
            id="description"
            placeholder="Something about the service"
            className={styles.textarea}
            value={description}
            onChange={onDescriptionChange}
          />
        </div>
        <div className={styles.error}>
          {descriptionError ? "Please enter a description." : null}
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="delivery-duration" className={styles.label}>
            Estimated Delivery Duration (days)
          </label>
          <input
            type="number"
            name="delivery-duration"
            id="delivery-duration"
            placeholder="0000"
            className={styles.input}
            value={estimatedDeliveryDuration}
            onChange={onDeliveryChange}
          />
        </div>
        <div className={styles.error}>
          {deliveryError ? "Please enter a valid delivery duration." : null}
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="price" className={styles.label}>
            Price (Per Km)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="00.00"
            className={styles.input}
            value={price}
            onChange={onPriceChange}
          />
        </div>
        <div className={styles.error}>
          {priceError ? "Please enter a valid price." : null}
        </div>

        <div className={styles.labelContainer}>
          <label htmlFor="type" className={styles.label}>
            Service Type
          </label>
          <select
            id="type"
            name="type"
            className={styles.select}
            value={serviceType}
            onChange={onServiceTypeChange}
          >
            <option value="">---- Select a service type ----</option>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>
        </div>
        <div className={styles.error}>
          {serviceTypeError ? "Please select a service type." : null}
        </div>

        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <PulseLoader color="#fff" size={5} /> : "Add Service"}
        </button>
        <button className={styles.backButton} onClick={backHandler}>
          Back
        </button>
      </form>
    </div>
  );
}
