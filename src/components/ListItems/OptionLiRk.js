import React, { useState, useRef, useEffect } from "react";

import { IconRk } from "../index";
import "./OptionLiRk.css";

const OptionLiRk = ({ value, onChange, handleDelete }) => {
  const [isDisable, setIsDisable] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isDisable) inputRef.current.focus();
  }, [isDisable]);

  const handleDisable = () => {
    setIsDisable(true);
  };

  return (
    <div className="container-li">
      <input
        ref={inputRef}
        className="form-control input"
        value={value}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleDisable();
        }}
        onBlur={(e) => {
          handleDisable();
        }}
        disabled={isDisable}
        onChange={onChange}
      />
      {isDisable ? (
        <IconRk
          name={"edit"}
          onClick={() => {
            setIsDisable(false);
          }}
        />
      ) : (
        <IconRk
          name={"x"}
          onClick={() => {
            handleDisable();
          }}
        />
      )}
      <IconRk name={"trash"} onClick={handleDelete} />
    </div>
  );
};

export default OptionLiRk;
