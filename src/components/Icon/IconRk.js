import React from "react";
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
import { BiSelectMultiple } from "react-icons/bi";
import { FaRobot, FaChevronDown, FaChevronUp } from "react-icons/fa";

const styleObj = {
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#111",
  borderRadius: "50%",
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
          style={{ ...styleObj, ...style, borderColor: "#189" }}
        />
      );
    case "date":
      return (
        <MdDateRange
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "checkbox":
      return (
        <MdChecklistRtl
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "file":
      return (
        <MdFilePresent
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "password":
      return (
        <MdPassword
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "radio":
      return (
        <MdRadioButtonChecked
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "captcha":
      return (
        <FaRobot
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "textarea":
      return (
        <MdTextSnippet
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "select":
      return (
        <BiSelectMultiple
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "setting":
      return (
        <MdSettings
          {...otherProps}
          style={{ ...styleObj, ...style, borderColor: "#" }}
        />
      );
    case "chevronUp":
      return <FaChevronUp {...otherProps} style={{ ...style, margin: 3 }} />;
    case "chevronDown":
      return <FaChevronDown {...otherProps} style={{ ...style, margin: 3 }} />;

    default:
      return null;
  }
};

export default IconRk;
