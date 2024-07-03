import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import getAuthToken from "../../utils/auth";

import styles from "./ViewRequest.module.css";

export default function ViewRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState();
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [days, setDays] = useState(23);
  const [price, setPrice] = useState(258);

  const token = getAuthToken().token;

  async function fetchOrders() {
    await axios({
      method: "get",
      url: "/api/clients/getAllOrders",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data.responseData[orderId - 1]);
        setOrder(res.data.responseData[orderId - 1]);
      })
      .catch((err) => {
        console.log("Error fetching orders", err);
      });
  }

  useEffect(() => {
    fetchOrders();
  }, []);

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
          {order && (
            <>
              <h3>Order details</h3>
              <p>Order ID: {order.OrderId}</p>
              <p>Customer Name: {order.CustomerName}</p>
              <p>Customer Email: {order.CustomerEmailAddress}</p>
              <p>Customer Phone: +1{order.CustomerContact}</p>
              <p>Service Name: {order.ServiceName}</p>
              <p>Price (per kms): $35.20</p>
              <br />
              <h3>Shipping Details</h3>
              <p>Source: {order.Source}</p>
              <p>Destination: {order.Destination}</p>
              <p>Premium shipping: {order.Premium.toUpperCase()}</p>
              <br />
              <h3>Packagage details: </h3>
              <p>Dimensions: {order.Dimensions}</p>
              <p>Weight (kgs): {order.Weight}</p>
              <p>Package type: {order.Type.toUpperCase()}</p>
            </>
          )}
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
