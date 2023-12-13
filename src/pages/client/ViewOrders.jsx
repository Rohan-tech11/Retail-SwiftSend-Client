import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./Orders.module.css";
import getAuthToken from "../../utils/auth";
import { useEffect, useState } from "react";

const Status = ["In-Process", "Pending Response", "Approved", "Rejected"];

export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState();

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
        console.log(res.data.responseData);
        setOrders(res.data.responseData);
      })
      .catch((err) => {
        console.log("Error fetching orders", err);
      });
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <h1>Orders</h1>
      </div>
      {orders ? (
        <table style={{ maxWidth: "95%" }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Service Name</th>
              <th>User Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {orders.map((order) => {
              return (
                <tr key={order.OrderId}>
                  <td>{order.OrderId}</td>
                  <td>{order.ServiceName}</td>
                  <td>{order.CustomerName}</td>
                  <td>
                    <FaClockRotateLeft /> {Status[1]}
                    {/* <FaCheckCircle /> {Status[2]} */}
                    {/* <FaCircleXmark /> {Status[3]} */}
                  </td>
                  <td>
                    <Link to={`${order.OrderId}`}>
                      <button className={styles.button}>View Request</button>
                    </Link>
                  </td>
                  <td
                    style={{
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "15px",
                      border: "none",
                    }}
                  >
                    <IconContext.Provider
                      value={{ color: "undefined", size: "1.5em" }}
                    >
                      <FaCheckCircle /> | <FaCircleXmark />
                    </IconContext.Provider>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No orders received to display yet.</div>
      )}
    </div>
  );
}
