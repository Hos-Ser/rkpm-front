import React from "react";
import { useDispatch } from "react-redux";

import { CheckboxRK, IconRk } from "../index";
import { questionReqToggled } from "../../stateStore/formReducer";

const QuestionBoxRk = ({ question, questionUpdate, ...otherProps }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 16,
        padding: 5,
        paddingTop: 0,
        width: "100% ",
        cursor: "pointer",
      }}
      onClick={() => console.log("container clicked")}
    >
      <span>
        <IconRk name={question.questionType} />
      </span>
      <input
        disabled
        type={"text"}
        value={question.title}
        style={{
          textOverflow: "ellipsis",
          width: 450,
          color: "black",
          backgroundColor: "white",
          border: "none",
          marginLeft: 4,
          cursor: "pointer",
        }}
      />
      <span
        onClick={(e) => e.stopPropagation()}
        style={{ position: "absolute", left: 60 }}
      >
        <CheckboxRK
          containerStyle={{ display: "inline", paddingLeft: 50 }}
          label={"اجباری؟"}
          role={"switch"}
          isSwitch={true}
          onChange={() => {
            dispatch(questionReqToggled(question.id));
          }}
          checked={question.required}
        />
        <span style={{}}>
          <IconRk
            onClick={() => {}}
            name={"chevronUp"}
            style={{ cursor: "pointer" }}
          />
          <IconRk
            onClick={() => {}}
            name={"chevronDown"}
            style={{ cursor: "pointer" }}
          />
        </span>
      </span>
    </div>
  );
};

export default QuestionBoxRk;
