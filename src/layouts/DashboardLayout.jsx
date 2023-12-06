import { Outlet, json } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import styles from "./Dashboard.module.css";
import getAuthToken from "../utils/auth";

export default function DashboardLayout() {
  const [sidebar, setSidebar] = useState(true);

  const [user, setUser] = useState({});

  const { cookie, token } = getAuthToken();

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token));
    } else {
      throw json("Unauthorized.", 401);
    }
  }, []);

  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} role={user.roles} />
      <div className={sidebar ? styles.open : styles.closed}>
        <Outlet />
      </div>
    </>
  );
}
