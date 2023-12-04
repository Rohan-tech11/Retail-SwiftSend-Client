import { Outlet } from "react-router-dom";
import Cookie from "universal-cookie";

import ClientSidebar from "../components/ClientSidebar";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import styles from "./Dashboard.module.css";

function DashboardLayout() {
  const [sidebar, setSidebar] = useState(true);

  const [user, setUser] = useState();

  useEffect(() => {
    const cookie = new Cookie();
    setUser(jwtDecode(cookie.get("jwt")));
  }, []);

  // if (user) {
  return (
    <>
      <ClientSidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className={sidebar ? styles.open : styles.closed}>
        {/* <h1>Hi, {user.sub}</h1> */}
        <Outlet />
      </div>
    </>
  );
  // } else {
  //   throw Error("You do not have permission to access this page.",
  //   );
  // }
}

export default DashboardLayout;
