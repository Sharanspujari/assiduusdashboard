import React, { useState } from "react";
import style from "../styles/dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Table from "../Components/Table";
import LineChart from "../Components/LineChart";
import BarChat from "../Components/BarChat";
import Dropdown from "../Components/Dropdown";

const manageData = [
  { id: "0", name: "Manage" },
  { id: "1", name: "Option1" },
  { id: "1", name: "Option4" },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Dashboard = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [data, setData] = useState([70, 50, 90, 115, 60, 95, 30, 90, 95]);
  const handleTogglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const handleMonthChange = (selected) => {
    const newData = Array.from({ length: 9 }, () =>
      Math.floor(Math.random() * 100)
    );
    setData(newData);
    setSelectedMonth(selected);
  };

  return (
    <div className={style.mainContainer}>
      {/* poup Container */}
      {isOpenPopup && (
        <div className={style.popupContainer}>
          <div className={style.popupmainContent}>
            <FontAwesomeIcon
              icon={faXmark}
              className={style.closeIcon}
              onClick={handleTogglePopup}
            />
            <div className={style.poupContent}>
              <input type="file" />
              <button>Upload</button>
            </div>
          </div>
        </div>
      )}
      <div className={style.gridContainer}>
        <div className={style.leftTop}>
          <div className={style.grapheadingContainer}>
            <span style={{ fontWeight: "500" }}>Checking Account</span>
            <div className={style.dropdownContainer}>
              <select id="mySelect">
                {manageData.length !== 0 ? (
                  manageData.map((item, i) => {
                    return (
                      <option key={i + 1} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })
                ) : (
                  <option value={"No data"}>No data</option>
                )}
              </select>

              <Dropdown
                months={months}
                selectedMonth={selectedMonth}
                onChange={handleMonthChange}
              />
            </div>
          </div>
          <div className={style.line}></div>
          <LineChart data={data} />
        </div>

        <div className={style.rightTop}>
          <div className={style.grapheadingContainer}>
            <span style={{ fontWeight: "500" }}>Invoices owed to you</span>
            <div className={style.dropdownContainer}>
              <button className={style.newsalesBtn} onClick={handleTogglePopup}>
                New Sales Invoice
              </button>
            </div>
          </div>
          <div className={style.line}></div>
          <BarChat />
        </div>

        <div className={style.leftBottom}>
          <div className={style.grapheadingContainer}>
            <span style={{ fontWeight: "500" }}>Total cash flow</span>
            <div className={style.dropdownContainer}>
              <div className={style.checkboxContainer}>
                <div className={style.in}></div>
                <label>In</label>
              </div>
              <div className={style.checkboxContainer}>
                <div className={style.out}></div>
                <label>Out</label>
              </div>
            </div>
          </div>
          <div className={style.line}></div>
          <BarChat />
        </div>

        <div className={style.rightBottom}>
          <div className={style.grapheadingContainer}>
            <span style={{ fontWeight: "500" }}>Account Watchlist</span>
            <div className={style.dropdownContainer}></div>
          </div>
          <div className={style.line}></div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
