import React from "react";

const CheckboxRk = ({ label, containerStyle, isSwitch, ...otherProps }) => {
  return (
    <div className={`mb-2 ${isSwitch && "form-switch"}`} style={containerStyle}>
      <label className="text-black">
        {label}
        <input
          className="form-check-input me-2"
          type={"checkbox"}
          style={{ marginTop: 6 }}
          {...otherProps}
        />
      </label>
    </div>
  );
};

export default CheckboxRk;
