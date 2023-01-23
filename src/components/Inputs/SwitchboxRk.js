import React from "react";

const SwitchboxRk = ({ label, containerStyle, ...otherProps }) => {
  return (
    <div
      className="mb-2 form-switch"
      style={{ display: "grid", paddingLeft: 0, ...containerStyle }}
    >
      <label className="text-black">
        {label}
        <input
          className="form-check-input"
          type={"checkbox"}
          style={{ marginLeft: 10, marginTop: 6, marginRight: 10 }}
          {...otherProps}
        />
      </label>
    </div>
  );
};

export default SwitchboxRk;
