import React from "react";

const NumberInputRk = ({ containerStyle, label, ...otherProps }) => {
  return (
    <div className="mb-2" style={containerStyle}>
      <label
        className="form-label align-content-center align-self-center text-black"
        style={{ width: "100%" }}
      >
        {label}
        <input className="mt-2 form-control" type={"number"} {...otherProps} />
      </label>
    </div>
  );
};

export default NumberInputRk;
