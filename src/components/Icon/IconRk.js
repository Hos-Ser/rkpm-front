import React from "react";

import "./IconRk.css";
import {
  MdTextFields,
  MdDateRange,
  MdChecklistRtl,
  MdFilePresent,
  MdPassword,
  MdRadioButtonChecked,
  MdTextSnippet,
  MdSettings,
} from "react-icons/md";
import { BiHash, BiUserCircle } from "react-icons/bi";
import { FaRobot, FaChevronDown, FaChevronUp } from "react-icons/fa";

// BiSelectMultiple

const styleObj = {
  borderRadius: "40%",
  width: 21,
  height: 21,
  marginLeft: 9,
  verticalAlign: "center",
  padding: 1.3,
};

const IconRk = ({ style, name, ...otherProps }) => {
  switch (name) {
    case "text":
      return (
        <MdTextFields
          {...otherProps}
          className="text-icon"
          style={{
            ...styleObj,
            ...style,
          }}
        />
      );
    case "number":
      return (
        <BiHash
          {...otherProps}
          className="number-icon"
          style={{
            ...styleObj,
            ...style,
          }}
        />
      );
    case "date":
      return (
        <MdDateRange
          {...otherProps}
          className="date-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "checkbox":
      return (
        <MdChecklistRtl
          {...otherProps}
          className="checkbox-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "file":
      return (
        <MdFilePresent
          {...otherProps}
          className="file-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "password":
      return (
        <MdPassword
          {...otherProps}
          className="password-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "radio":
      return (
        <MdRadioButtonChecked
          {...otherProps}
          className="radio-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "captcha":
      return (
        <FaRobot
          {...otherProps}
          className="captcha-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "textarea":
      return (
        <MdTextSnippet
          {...otherProps}
          className="textarea-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    // case "select":
    //   return (
    //     <BiSelectMultiple
    //       {...otherProps}
    //       className="select-icon"
    //       style={{ ...styleObj, ...style, borderColor: "#" }}
    //     />
    //   );
    case "setting":
      return (
        <MdSettings
          {...otherProps}
          className="setting-icon"
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "chevronUp":
      return <FaChevronUp {...otherProps} style={{ ...style, margin: 3 }} />;
    case "chevronDown":
      return <FaChevronDown {...otherProps} style={{ ...style, margin: 3 }} />;
    case "user":
      return <BiUserCircle {...otherProps} style={{ ...style, margin: 3 }} />;

    default:
      return null;
  }
};

export default IconRk;
