import React from "react";

const SelectRk = ({ label, options, containerSyle, value, ...otherProps }) => {
  return (
    <div style={{ ...containerSyle }}>
      <label>
        {label}
        <select value={value} {...otherProps}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectRk;
