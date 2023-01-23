import React from "react";

const SelectRk = ({ label, options, containerSyle, value, ...otherProps }) => {
  return (
    <div style={{ ...containerSyle }}>
      <label style={{ color: "black", width: "100%" }}>
        {label}
        <select
          value={value}
          style={{
            paddingRight: "1.1rem",
            border: "none",
            borderRadius: 3,
            marginRight: 10,
            width: "60%",
            textAlign: "center",
          }}
          {...otherProps}
        >
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
