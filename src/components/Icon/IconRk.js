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
import {
  BiHash,
  BiUserCircle,
  BiPlusCircle,
  BiTrash,
  BiPencil,
  BiCheck,
  BiXCircle,
} from "react-icons/bi";
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
          className="plus-icon hover-icon"
          style={{ ...style }}
        />
      );
    case "trash":
      return (
        <BiTrash
          {...otherProps}
          className="selectable-icon hover-icon"
          style={{ ...style }}
        />
      );
    case "edit":
      return (
        <BiPencil
          {...otherProps}
          className="selectable-icon hover-icon"
          style={{ ...style }}
        />
      );
    case "check":
      return (
        <BiCheck
          {...otherProps}
          className="selectable-icon hover-icon"
          style={{ ...style }}
        />
      );
    case "x":
      return (
        <BiXCircle
          {...otherProps}
          className="selectable-icon hover-icon"
          style={{ ...style }}
        />
      );
    case "chevronUp":
      return (
        <FaChevronUp
          className="chevron-icon hover-icon"
          {...otherProps}
          style={style}
        />
      );
    case "chevronDown":
      return (
        <FaChevronDown
          {...otherProps}
          className="chevron-icon hover-icon"
          style={style}
        />
      );
    case "user":
      return <BiUserCircle {...otherProps} style={{ ...style, margin: 3 }} />;

    default:
      return null;
  }
};

export default IconRk;
