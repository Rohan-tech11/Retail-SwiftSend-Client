import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

import styles from "./viewRequest.module.css";

export default function ViewRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [days, setDays] = useState(23);
  const [price, setPrice] = useState(258);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/client/orders");
    }, 1500);
  }

  function handleBack(event) {
    event.preventDefault();
    navigate("..");
  }
  return (
    <div>
      <div className={styles.header}>
        <h1>Send Quotation</h1>
      </div>
      <div style={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
        <div
          style={{
            padding: "25px",
            border: "1px solid #1c1c1c",
            borderRadius: "7px",
          }}
        >
          <h3>Order details</h3>
          <p>Order ID: 001</p>
          <p>Customer Name: John Doe</p>
          <p>Service Name: Global Express</p>
          <p>Price (per kms): $35.20</p>
          <br />
          <h3>Shipping Details</h3>
          <p>Source: 34, Weber St, Waterloo, ON, Canada</p>
          <p>Destination: 89, Queens, Austin, TX, USA</p>
          <p>Premium shipping: Yes</p>
          <br />
          <h3>Packagage details: </h3>
          <p>Dimensions: 34 x 89.5, 12.4</p>
          <p>Weight (kgs): 45.60</p>
          <p>Package type: Regular</p>
        </div>
        <div>
          <form>
            <fieldset className={styles.fieldset}>
              <legend>Send a quote</legend>
              <div>
                <label htmlFor="delivery" className={styles.label}>
                  Estimated Delivery Days
                </label>
                <input
                  type="number"
                  name="delivery"
                  id="delivery"
                  className={styles.input}
                  value={days}
                />
              </div>
              <div>
                <label htmlFor="price" className={styles.label}>
                  Total Estimated Cost
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className={styles.input}
                  value={price}
                />
              </div>
            </fieldset>
            <button
              className={styles.button}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <PulseLoader color="#fff" size={5} />
              ) : (
                "Send Quotation"
              )}
            </button>
            <button className={styles.backButton} onClick={handleBack}>
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
