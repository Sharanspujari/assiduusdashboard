import React from 'react';

const Dropdown = ({ months, selectedMonth, onChange }) => {
  return (
    <select value={selectedMonth} onChange={(e) => onChange(e.target.value)}>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
