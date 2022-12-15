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
import { FaRobot } from "react-icons/fa";

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

const IconRk = ({ name }) => {
  switch (name) {
    case "text":
      return <MdTextFields style={{ ...style, borderColor: "#189" }} />;
    case "date":
      return <MdDateRange style={{ ...style, borderColor: "#" }} />;
    case "checkbox":
      return <MdChecklistRtl style={{ ...style, borderColor: "#" }} />;
    case "file":
      return <MdFilePresent style={{ ...style, borderColor: "#" }} />;
    case "password":
      return <MdPassword style={{ ...style, borderColor: "#" }} />;
    case "radio":
      return <MdRadioButtonChecked style={{ ...style, borderColor: "#" }} />;
    case "captcha":
      return <FaRobot style={{ ...style, borderColor: "#" }} />;
    case "textarea":
      return <MdTextSnippet style={{ ...style, borderColor: "#" }} />;
    case "select":
      return <BiSelectMultiple style={{ ...style, borderColor: "#" }} />;
    case "setting":
      return <MdSettings style={{ ...style, borderColor: "#" }} />;

    default:
      return null;
  }
};

export default IconRk;
