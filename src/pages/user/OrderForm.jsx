import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./OrderForm.module.css";
import getAuthToken from "../../utils/auth";

export default function OrderForm({ id, banner, setBanner }) {
  const [source, setSource] = useState("34, Weber St, Waterloo, ON, Canada");
  const [destination, setDestination] = useState("89, Queens, Austin, TX, USA");
  const [premium, setPremiun] = useState("yes");
  const [dimensions, setDimensions] = useState("34 x 89.5 x 12.4");
  const [weight, setWeight] = useState(45.6);
  const [type, setType] = useState("regular");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function onSourceChange(event) {
    let value = event.target.value;
    setSource(value);
  }

  function onDestinationChange(event) {
    let value = event.target.value;
    setDestination(value);
  }

  function onPremiumChange(event) {
    let value = event.target.value;
    setPremiun(value);
  }

  function onDimensionsChange(event) {
    let value = event.target.value;
    setDimensions(value);
  }

  function onWeightChange(event) {
    let value = event.target.value;
    setWeight(value);
  }

  function onTypeChange(event) {
    let value = event.target.value;
    setType(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const token = getAuthToken().token;

    const data = {
      source: source,
      destination: destination,
      premium: premium,
      dimensions: dimensions,
      weight: weight,
      type: type,
    };

    await axios({
      method: "post",
      url: `/api/users/orders/placeorder/${id}`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        setBanner(true);
        // navigate("/user/orders");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Error placing order:", err);
      });
  }

  function handleBack(event) {
    event.preventDefault();
    navigate("..");
  }
  return (
    <form className={styles.form}>
      <div className={styles.formColumn}>
        <fieldset className={styles.fieldset}>
          <legend>Shipping</legend>
          <div>
            <label htmlFor="source" className={styles.label}>
              Source
            </label>
            <input
              type="text"
              name="source"
              id="source"
              placeholder="Waterloo, ON, Canada"
              className={styles.input}
              value={source}
              onChange={onSourceChange}
            />
          </div>
          <div>
            <label htmlFor="destination" className={styles.label}>
              Destination
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              placeholder="Austin, TX, USA"
              className={styles.input}
              value={destination}
              onChange={onDestinationChange}
            />
          </div>
          <div>
            <label htmlFor="premium" className={styles.label}>
              Express Premium
            </label>
            <select
              name="premium"
              id="premium"
              className={styles.select}
              value={premium}
              onChange={onPremiumChange}
            >
              <option value="no">NO</option>
              <option value="yes">YES</option>
            </select>
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Package details</legend>
          <div>
            <label htmlFor="dimensions" className={styles.label}>
              Dimensions (in Inch)
            </label>
            <input
              type="text"
              name="dimensions"
              id="dimensions"
              placeholder="20 x 34 x 12.5"
              className={styles.input}
              value={dimensions}
              onChange={onDimensionsChange}
            />
          </div>
          <div>
            <label htmlFor="weight" className={styles.label}>
              Weight (In kgs)
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="50.3"
              className={styles.input}
              value={weight}
              onChange={onWeightChange}
            />
          </div>
          <div>
            <label htmlFor="type" className={styles.label}>
              Package Type
            </label>
            <select
              name="type"
              id="type"
              className={styles.select}
              value={type}
              onChange={onTypeChange}
            >
              <option value="">--- Select package type ---</option>
              <option value="regular">Regular</option>
              <option value="fragile">Fragile</option>
              <option value="food">Food Grade</option>
              <option value="documents">Documents</option>
              <option value="freight">Freight</option>
              <option value="heavy">Heavy Shipment</option>
            </select>
          </div>
        </fieldset>
      </div>
      <button
        className={styles.button}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? <PulseLoader color="#fff" size={5} /> : "Place Order"}
      </button>
      <button className={styles.backButton} onClick={handleBack}>
        Back
      </button>
    </form>
  );
}
