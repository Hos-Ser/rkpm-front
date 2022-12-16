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

const style = {
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

const IconRk = ({ styleProp, name, ...otherProps }) => {
  switch (name) {
    case "text":
      return (
        <MdTextFields
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#189" }}
        />
      );
    case "date":
      return (
        <MdDateRange
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "checkbox":
      return (
        <MdChecklistRtl
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "file":
      return (
        <MdFilePresent
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "password":
      return (
        <MdPassword
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "radio":
      return (
        <MdRadioButtonChecked
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "captcha":
      return (
        <FaRobot
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "textarea":
      return (
        <MdTextSnippet
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "select":
      return (
        <BiSelectMultiple
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "setting":
      return (
        <MdSettings
          {...otherProps}
          style={{ ...style, ...styleProp, borderColor: "#" }}
        />
      );
    case "chevronUp":
      return <FaChevronUp {...otherProps} style={styleProp} />;
    case "chevronDown":
      return <FaChevronDown {...otherProps} style={styleProp} />;

    default:
      return null;
  }
};

export default IconRk;
