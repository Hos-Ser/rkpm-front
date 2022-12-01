import React from "react";

const TextAreaRk = ({ label, containerStyle, ...otherParams }) => {
  return (
    <div className="mb-2" style={containerStyle}>
      <label className="form-label text-black">
        {label}
        <textarea className="form-control mt-2" {...otherParams}></textarea>
      </label>
    </div>
  );
};

export default TextAreaRk;
