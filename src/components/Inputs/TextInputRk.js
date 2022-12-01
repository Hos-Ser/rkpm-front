import React from "react";

const TextInputRk = ({ label }) => {
  return (
    <div className="mb-2">
      <label className="form-label align-content-center align-self-center text-black">
        {label}
        <input className="form-control mt-2" type={"text"} />
      </label>
    </div>
  );
};

export default TextInputRk;
