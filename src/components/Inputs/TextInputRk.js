import React from "react";

const TextInputRk = ({ label, containerStyle, ...otherParams }) => {
  return (
    <div className="mb-2" style={containerStyle}>
      <label className="form-label align-content-center align-self-center text-black">
        {label}
        <input className="form-control mt-2" type={"text"} {...otherParams} />
      </label>
    </div>
  );
};

export default TextInputRk;
