import { FaTruckFast } from "react-icons/fa6";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { Link } from "react-router-dom";

import styles from "./Explore.module.css";

export default function Explore() {
  const services = [
    {
      id: 1,
      name: "Express Courier",
      clientName: "FedEx",
      serviceType: "Domestic",
      price: 12.4,
    },
    {
      id: 2,
      name: "Overseas Premium",
      clientName: "UPS",
      serviceType: "International",
      price: 28.5,
    },
    {
      id: 3,
      name: "Standard Shipping",
      clientName: "DHL",
      serviceType: "Domestic",
      price: 9.8,
    },
    {
      id: 4,
      name: "Global Express",
      clientName: "TNT",
      serviceType: "International",
      price: 35.2,
    },
    {
      id: 5,
      name: "Local Delivery",
      clientName: "USPS",
      serviceType: "Domestic",
      price: 7.2,
    },
    {
      id: 6,
      name: "Air Cargo",
      clientName: "DHL",
      serviceType: "International",
      price: 42.9,
    },
    {
      id: 7,
      name: "Ground Shipping",
      clientName: "UPS",
      serviceType: "Domestic",
      price: 15.3,
    },
    {
      id: 8,
      name: "Ocean Freight",
      clientName: "FedEx",
      serviceType: "International",
      price: 55.6,
    },
    {
      id: 9,
      name: "Priority Mail",
      clientName: "USPS",
      serviceType: "Domestic",
      price: 10.5,
    },
    {
      id: 10,
      name: "Expedited Shipping",
      clientName: "TNT",
      serviceType: "International",
      price: 30.7,
    },
  ];

  return (
    <div className={styles.container}>
      {services.map((items, index) => {
        return (
          <Link to={`${items.id}`} className={styles.link}>
            <div className={styles.card} key={items.id}>
              <h3 className={styles.cardHeading}>{items.name}</h3>
              <p
                className={
                  items.serviceType === "Domestic"
                    ? styles.domestic
                    : styles.international
                }
              >
                {items.serviceType === "Domestic" ? (
                  <FaTruckFast />
                ) : (
                  <PiAirplaneInFlightFill />
                )}
                {items.serviceType}
              </p>

              <p className={styles.client}>{items.clientName}</p>
              <p className={styles.price}>
                ${items.price.toFixed(2)}
                <span className={styles.unit}>/km</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
