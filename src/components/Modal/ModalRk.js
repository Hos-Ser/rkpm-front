import React from "react";
import { RiCloseLine } from "react-icons/ri";
import "./ModalRk.css";

const ModalRk = ({ setIsOpen }) => {
  console.log("asdasd");
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="myModal"></div>
      </div>
    </>
  );
};

export default ModalRk;
