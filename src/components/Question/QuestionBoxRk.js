import React from "react";
import { useDispatch } from "react-redux";

import { CheckboxRK, IconRk } from "../index";
import { questionReqToggled } from "../../stateStore/formReducer";

const QuestionBoxRk = ({
  modalState,
  setModalState,
  question,
  questionUpdate,
  ...otherProps
}) => {
  const dispatch = useDispatch();

  const handleOpenModal = (qType) => {
    setModalState({ isVisibile: true, qType, question: question });
  };
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
        display: "grid",
        gridTemplateColumns: "0.5fr 8fr 3fr",
      }}
      onClick={() => {
        handleOpenModal(question.questionType);
      }}
    >
      <span>
        <IconRk name={question.questionType} />
      </span>
      <span
        style={{ textOverflow: "ellipsis", width: "100%", overflow: "hidden" }}
      >
        {question.title}
      </span>
      <span onClick={(e) => e.stopPropagation()} style={{ justifySelf: "end" }}>
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
