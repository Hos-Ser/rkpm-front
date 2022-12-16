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
      }}
    >
      <span>
        <IconRk name={question.questionType} />
      </span>
      <CheckboxRK
        containerStyle={{ display: "inline", paddingLeft: 10 }}
        label={"اجباری؟"}
        role={"switch"}
        isSwitch={true}
        onChange={() => {
          dispatch(questionReqToggled(question.id));
        }}
        checked={question.required}
      />
      <span>
        <IconRk name={"chevronUp"} style={{}} />
        <IconRk name={"chevronDown"} />
      </span>
    </div>
  );
};

export default QuestionBoxRk;
