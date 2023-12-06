import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, NavLink, json } from "react-router-dom";
import { client, user } from "./NavData";
import { IconContext } from "react-icons";

import styles from "./ClientNav.module.css";
import getAuthToken from "../utils/auth";
import { jwtDecode } from "jwt-decode";

function Sidebar({ sidebar, setSidebar }) {
  const toggleSidebar = () => setSidebar(!sidebar);

  const [menu, setMenu] = useState(client);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(jwtDecode(getAuthToken().token));
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "undefined", size: "1.5em" }}>
        <div className={styles.navbar}>
          <Link to="#" className={styles.menu__bars}>
            {sidebar ? (
              <AiIcons.AiOutlineClose onClick={toggleSidebar} />
            ) : (
              <FaIcons.FaBars onClick={toggleSidebar} />
            )}
          </Link>
          <div>
            <Link to="/client">
              <img src="/logo.jpeg" alt="Logo" height="35px" />
            </Link>
          </div>
        </div>
        <nav className={sidebar ? styles.nav__menu__active : styles.nav__menu}>
          <ul className={styles.nav__menu__items}>
            {token.roles === "USER"
              ? user.map((item, index) => {
                  return (
                    <li key={index} className={styles.nav__text}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? styles.nav__text__active : ""
                        }
                        end
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  );
                })
              : client.map((item, index) => {
                  return (
                    <li key={index} className={styles.nav__text}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? styles.nav__text__active : ""
                        }
                        end
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
