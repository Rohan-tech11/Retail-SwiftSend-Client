import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLoaderData, json, useNavigate } from "react-router-dom";
import getAuthToken from "../../utils/auth";

import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

import styles from "./Services.module.css";

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
    name: "Global Express",
    type: "international",
    price: 35.2,
  },
];

export default function Services() {
  const [isApproved, setIsApproved] = useState(false);

  async function checkAdminApproval() {
    const token = getAuthToken().token;

    await axios({
      method: "get",
      url: "/api/clients/isAdminApproved",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setIsApproved(res.data.responseData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchServices() {
    const token = getAuthToken().token;

    await axios({
      method: "get",
      url: "/api/clients/isAdminApproved",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setIsApproved(res.data.responseData);
      })
      .catch((err) => {
        setIsApproved(false);
        console.log("Error fetching approval status", err);
      });
  }

  const navigate = useNavigate()

  function handleAddService() {
    navigate("add")
  }

  useEffect(() => {
    checkAdminApproval();
  });

  return (
    <div>
      <div className={styles.header}>
        <h1>Services</h1>
          <button className={styles.button} disabled={!isApproved} onClick={handleAddService}>
            <FaPlusCircle />
            <span style={{ marginLeft: "5px" }}>Add a service</span>
          </button>
      </div>
      <div className={styles.container}>
        {!isApproved ? (
          <div className={styles.warning}>
            <MdError /> Your account is not approved by the admin yet. You won't
            be able to add services.
          </div>
        ) : (
          ""
        )}
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
              <tr>No results found.</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
