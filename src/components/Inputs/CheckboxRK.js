import React from "react";

const CheckboxRK = ({ label, containerStyle, isSwitch, ...otherProps }) => {
  return (
    <div className={`mb-2 ${isSwitch && "form-switch"}`} style={containerStyle}>
      <label className="text-black">
        <input
          className="form-check-input mt-2 ms-2"
          type={"checkbox"}
          {...otherProps}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxRK;
