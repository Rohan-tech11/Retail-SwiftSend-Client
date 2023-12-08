import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

import styles from "./Orders.module.css";

const Status = ["In-Process", "Pending Response", "Approved", "Rejected"];

export default function Orders() {
  const navigate = useNavigate();

  function handleViewOrder() {
    navigate("1");
  }

  return (
    <div>
      <div className={styles.header}>
        <h1>Orders</h1>
      </div>
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
          <tr>
            <td>001</td>
            <td>Global Express</td>
            <td>TNT</td>
            <td>
              {/* <FaClockRotateLeft /> {Status[1]} */}
              <FaCheckCircle /> {Status[2]}
              {/* <FaCircleXmark /> {Status[3]} */}
            </td>
            <td>
              <button className={styles.button} onClick={handleViewOrder}>
                View Request
              </button>
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
        </tbody>
      </table>
    </div>
  );
}
