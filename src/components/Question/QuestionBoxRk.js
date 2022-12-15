import React from "react";

import { CheckboxRK, IconRk } from "../index";

const QuestionBoxRk = ({ iconName, ...otherProps }) => {
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 16,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
        width: "100% ",
      }}
    >
      <div style={{ width: 10, height: 10, backgroundColor: "dodgerblue" }}>
        {/* <IconRk name={"text"} /> */}
      </div>
      <CheckboxRK
        label={"اجباری؟"}
        role={"switch"}
        isSwitch={true}
        // onChange={() =>
        //   updateQuestion((draft) => {
        //     draft.required = !draft.required;
        //   })
        // }
      />
    </div>
  );
};

export default QuestionBoxRk;
