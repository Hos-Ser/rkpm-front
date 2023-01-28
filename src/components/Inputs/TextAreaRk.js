import React from "react";

const TextAreaRk = ({ maxLength, label, containerStyle, ...otherProps }) => {
  return (
    <div className="mb-2" style={containerStyle}>
      <label className="form-label text-black" style={{ width: "100%" }}>
        {label}
        <textarea
          maxLength={maxLength ? maxLength : 1000}
          className="form-control mt-2"
          {...otherProps}
        ></textarea>
      </label>
    </div>
  );
};

export default TextAreaRk;
