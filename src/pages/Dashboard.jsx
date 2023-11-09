import React, { useState } from "react";
import style from "../styles/dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Table from "../Components/Table";
import LineChart from "../Components/LineChart";
const manageData = [
  { id: "0", name: "Manage" },
  { id: "1", name: "Option1" },
  { id: "1", name: "Option4" },
];
const monthData = [
  { id: "0", month: "January" },
  { id: "1", month: "Fabrury" },
  { id: "2", month: "March" },
  { id: "3", month: "April" },
  { id: "4", month: "May" },
  { id: "5", month: "June" },
  { id: "6", month: "July" },
  { id: "7", month: "August" },
  { id: "8", month: "September" },
  { id: "9", month: "October" },
  { id: "10", month: "November" },
  { id: "11", month: "December" },
];

const Dashboard = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  console.log("isOpenPopup: ", isOpenPopup);

  const handleTogglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
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

                <select id="mySelect">
                  {monthData.length !== 0 ? (
                    monthData.map((data, i) => {
                      return (
                        <option key={i + 1} value={data.month}>
                          {data.month}
                        </option>
                      );
                    })
                  ) : (
                    <option value={"No data"}>No data</option>
                  )}
                </select>
              </div>
            </div>
            <div className={style.line}></div>
            <LineChart />
          </div>

          <div className={style.rightTop}>
            <div className={style.grapheadingContainer}>
              <span style={{ fontWeight: "500" }}>Invoices owed to you</span>
              <div className={style.dropdownContainer}>
                <button
                  className={style.newsalesBtn}
                  onClick={handleTogglePopup}
                >
                  New Sales Invoice
                </button>
              </div>
            </div>
            <div className={style.line}></div>
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
          </div>
         

          <div className={style.rightBottom}>
            <div className={style.grapheadingContainer}>
              <span style={{ fontWeight: "500" }}>Account Watchlist</span>
              <div className={style.dropdownContainer}></div>
            </div>
            <div className={style.line}></div>
            <Table />
          </div>
        {/* <div className={style.leftContainer}>
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

                <select id="mySelect">
                  {monthData.length !== 0 ? (
                    monthData.map((data, i) => {
                      return (
                        <option key={i + 1} value={data.month}>
                          {data.month}
                        </option>
                      );
                    })
                  ) : (
                    <option value={"No data"}>No data</option>
                  )}
                </select>
              </div>
            </div>
            <div className={style.line}></div>
            <LineChart />
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
          </div>
        </div>

        <div className={style.rightContainer}>
          <div className={style.rightTop}>
            <div className={style.grapheadingContainer}>
              <span style={{ fontWeight: "500" }}>Invoices owed to you</span>
              <div className={style.dropdownContainer}>
                <button
                  className={style.newsalesBtn}
                  onClick={handleTogglePopup}
                >
                  New Sales Invoice
                </button>
              </div>
            </div>
            <div className={style.line}></div>
          </div>

          <div className={style.rightBottom}>
            <div className={style.grapheadingContainer}>
              <span style={{ fontWeight: "500" }}>Account Watchlist</span>
              <div className={style.dropdownContainer}></div>
            </div>
            <div className={style.line}></div>
            <Table />
          </div>
        </div> */}
      </div>
    
    </div>

      );
};

export default Dashboard;
