import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";

import styles from "./Services.module.css";
import { FaPlusCircle } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "SpeedyExpress",
    type: "domestic",
    price: 5.0,
  },
  {
    id: 2,
    name: "GlobalShip",
    type: "international",
    price: 10.5,
  },
  {
    id: 3,
    name: "SwiftCourier",
    type: "domestic",
    price: 4.25,
  },
  {
    id: 4,
    name: "WorldCargo",
    type: "international",
    price: 12.75,
  },
  {
    id: 5,
    name: "RapidDelivery",
    type: "domestic",
    price: 6.8,
  },
];

export default function Services() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Services</h1>
        <Link to="add">
          <button className={styles.button}>
            <FaPlusCircle />
            <span style={{ marginLeft: "5px" }}>Add a service</span>
          </button>
        </Link>
      </div>
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Service Type</th>
              <th>Price (per km)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services ? (
              services.map((items) => {
                return (
                  <tr key={items.id}>
                    <td>{items.name}</td>
                    <td>{items.type}</td>
                    <td>${items.price.toFixed(2)}</td>
                    <td className={styles.actions}>
                      <Link to={`edit/${items.id}`}>
                        <FaPencil />
                      </Link>
                      |
                      <Link to={`delete/${items.id}`}>
                        <RiDeleteBin5Fill />
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>No results found.</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
