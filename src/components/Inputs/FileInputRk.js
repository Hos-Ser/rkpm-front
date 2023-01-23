import React from "react";

const FileInputRk = ({ label, containerSyle, ...otherProps }) => {
  return (
    <div style={{ ...containerSyle }}>
      <label>
        {label}
        <input type={"file"} {...otherProps} />
      </label>
    </div>
  );
};

export default FileInputRk;
