import { useParams } from "react-router-dom";

import styles from "./ServiceDetails.module.css";
import { useEffect, useState } from "react";
import OrderForm from "./OrderForm";

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

export default function ServiceDetails() {
  const { serviceId } = useParams();
  //   console.log(serviceId);

  const [service, setService] = useState("");

  // Service name
  // Service description
  // client name
  // price per km
  function fetchService() {
    setService(services[serviceId - 1]);
  }

  useEffect(() => {
    fetchService();
  }, []);
  console.log(service);

  // place order form
  return (
    <div>
      <div className={styles.header}>
        <h1>{service.name}</h1>
        <p>{service.clientName}</p>
      </div>
      <div className={styles.belowHeader}>
        <p>{service.serviceType}</p>
        <p>${service.price}/km</p>
      </div>
      <OrderForm />
    </div>
  );
}
