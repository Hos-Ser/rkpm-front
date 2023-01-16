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
import { BiHash, BiUserCircle, BiPlusCircle } from "react-icons/bi";
import { FaRobot, FaChevronDown, FaChevronUp } from "react-icons/fa";

// BiSelectMultiple

const IconRk = ({ style, name, ...otherProps }) => {
  switch (name) {
    case "text":
      return (
        <MdTextFields
          {...otherProps}
          className="text-icon icon-style"
          style={{
            ...style,
          }}
        />
      );
    case "number":
      return (
        <BiHash
          {...otherProps}
          className="number-icon icon-style"
          style={{
            ...style,
          }}
        />
      );
    case "date":
      return (
        <MdDateRange
          {...otherProps}
          className="date-icon icon-style"
          style={{ ...style }}
        />
      );
    case "checkbox":
      return (
        <MdChecklistRtl
          {...otherProps}
          className="checkbox-icon icon-style"
          style={{ ...style }}
        />
      );
    case "file":
      return (
        <MdFilePresent
          {...otherProps}
          className="file-icon icon-style"
          style={{ ...style }}
        />
      );
    case "password":
      return (
        <MdPassword
          {...otherProps}
          className="password-icon icon-style"
          style={{ ...style }}
        />
      );
    case "radio":
      return (
        <MdRadioButtonChecked
          {...otherProps}
          className="radio-icon icon-style"
          style={{ ...style }}
        />
      );
    case "captcha":
      return (
        <FaRobot
          {...otherProps}
          className="captcha-icon icon-style"
          style={{ ...style }}
        />
      );
    case "textarea":
      return (
        <MdTextSnippet
          {...otherProps}
          className="textarea-icon icon-style"
          style={{ ...style }}
        />
      );
    // case "select":
    //   return (
    //     <BiSelectMultiple
    //       {...otherProps}
    //       className="select-icon icon-style"
    //       style={{  ...style,  }}
    //     />
    //   );
    case "setting":
      return (
        <MdSettings
          {...otherProps}
          className="setting-icon icon-style"
          style={{ ...style }}
        />
      );
    case "plus":
      return (
        <BiPlusCircle
          {...otherProps}
          className="plus-icon"
          style={{ ...style }}
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
