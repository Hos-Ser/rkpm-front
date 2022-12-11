import React from "react";

const CheckboxRK = ({ label, containerStyle, isSwitch, ...otherParams }) => {
  return (
    <div className={`mb-2 ${isSwitch && "form-switch"}`} style={containerStyle}>
      <label className="form-check-label text-black">
        <input
          className="form-check-input mt-2 me-2"
          type={"checkbox"}
          {...otherParams}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxRK;
