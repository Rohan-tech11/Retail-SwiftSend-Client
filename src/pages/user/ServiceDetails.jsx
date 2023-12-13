import { Link, useParams } from "react-router-dom";
import axios from "axios";

import styles from "./ServiceDetails.module.css";
import { useEffect, useState } from "react";
import OrderForm from "./OrderForm";
import getAuthToken from "../../utils/auth";

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

  const [service, setService] = useState("");
  const [banner, setBanner] = useState(false);

  async function fetchService() {
    setService(services[serviceId - 1]);
    const token = getAuthToken().token;

    await axios({
      method: "get",
      url: `/api/users/fetchServiceById/${serviceId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data.responseData);
        setService(res.data.responseData);
      })
      .catch((err) => {
        console.log("Error fetching service", err);
      });
  }

  useEffect(() => {
    fetchService();
  }, []);

  // place order form
  return (
    <div>
      <div className={styles.header}>
        <h1>{service.serviceName}</h1>
        <p>{service.service_provider}</p>
      </div>
      <div className={styles.belowHeader}>
        <p>{service.serviceType?.toUpperCase()}</p>
        <p>${service.price}/km</p>
      </div>
      <p className={styles.description}>{service.serviceDescription}</p>
      {banner && (
        <div className={styles.successBanner}>
          Order Placed Successfully!{" "}
          <Link to="/user/orders" className={styles.link}>
            View
          </Link>{" "}
        </div>
      )}
      <OrderForm id={serviceId} banner={banner} setBanner={setBanner} />
    </div>
  );
}
