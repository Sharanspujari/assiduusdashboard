import React from "react";
import style from '../styles/tablecss.module.css'
const tableData = [
  { account: "Sales", thisMonth: "1,94,58", ytd: "11,418.29" },
  { account: "Advertising", thisMonth: "6,879.02", ytd: "9271.36" },
  { account: "Inventory", thisMonth: "4,692.26", ytd: "9,768.09" },
  { account: "Entertainment", thisMonth: "0.00", ytd: "0.00" },
  { account: "Product", thisMonth: "4,652.10", ytd: "2,529.90" },
];
const Table = () => {
  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Account</th>
            <th>This Month</th>
            <th>YTD</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, i) => {
            return (
              <tr key={i + 1}>
                <td>{item.account}</td>
                <td>{item.thisMonth}</td>
                <td>{item.ytd}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
