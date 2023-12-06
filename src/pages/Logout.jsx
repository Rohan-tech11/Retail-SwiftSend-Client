import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import styles from "./Logout.module.css";

export default function Logout() {
  const cookie = new Cookies();
  cookie.remove("jwt");
  localStorage.clear();

  const navigate = useNavigate();
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  return (
    <div className={styles.container}>
      <h1>Logged out successfully</h1>
      <p>Redirecting to login page...</p>
    </div>
  );
}
