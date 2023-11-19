import React from "react";
import style from "../styles/navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faDollarSign,
  faFileLines,
  faTableColumns,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const navData = [
    { id: 1, path: "/", icon: faTableColumns, heading: "Dashboard" },
    { id:2, path: "/accounts", icon: faWallet, heading: "Accounts" },
    { id:3, path: "/payroll", icon: faDollarSign, heading: "Payroll" },
    { id:4, path: "/reports", icon: faFileLines, heading: "Reports" },
    { id: 5, path: "/advisor", icon: faUser, heading: "Advisor" },
    { id: 6, path: "/contacts", icon: faAddressBook, heading: "Contact" },
  ];
  const location = useLocation();
  return (
    <div className={style.navbarContainer}>
      <div className={style.routeContainer}>
        {navData.length !== 0
          ? navData.map((item, i) => (
              <Link
                to={item.path}
                key={i + 1}
                className={style.navlink}
                style={{
                  backgroundColor:
                    location.pathname === item.path ? "green" : "",
                }}
              >
                <div className={style.singleroute}>
                  <div>
                    {" "}
                    <FontAwesomeIcon
                      style={{
                        color: location.pathname === item.path ? "white" : "",
                      }}
                      icon={item.icon}
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        color: location.pathname === item.path ? "white" : "",
                      }}
                      className={style.span}
                    >
                      {item.heading}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Navbar;
