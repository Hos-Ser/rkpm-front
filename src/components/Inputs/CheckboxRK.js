import React from "react";

const CheckboxRk = ({
  legend,
  options = [],
  containerStyle,
  ...otherProps
}) => {
  return (
    <fieldset style={{ display: "grid", marginBottom: "0.5rem" }}>
      <legend style={{ color: "black" }}>{legend}</legend>
      {options.map((option, index) => (
        <label key={index} className="text-black">
          <input
            className="form-check-input"
            type={"checkbox"}
            style={{ marginLeft: 10, marginTop: 6 }}
            {...otherProps}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default CheckboxRk;
