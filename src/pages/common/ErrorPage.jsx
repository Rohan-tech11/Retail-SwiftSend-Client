import { useRouteError, useNavigate } from "react-router-dom";
import { TiWarningOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styles from "./Error.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "An error occured.";
  let message = "Something went wrong.";
  let status = 500;

  console.log(error.status);

  switch (error.status) {
    case 401:
      title = "Unathorized";
      message = "You are not allowed to access the page.";
      status = 401;
      break;

    default:
      break;
  }

  function backHandler() {
    navigate("..");
  }

  return (
    <>
      <Header />
      <IconContext.Provider value={{ color: "#bb2d00", size: "3em" }}>
        <div className={styles.container}>
          <TiWarningOutline />
          <h1>{title}</h1>
          <h2>{status}</h2>
          <p>{message}</p>
          <button onClick={backHandler} className={styles.button}>Back</button>
        </div>
      </IconContext.Provider>
      <Footer />
    </>
  );
}
