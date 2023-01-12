import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

let lastOrder = 0;
const initialState = { questions: [], formConfig: {} };

const slice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // action => action handlers
    questionAdded(form, action) {
      const question = produce(action.payload.question, (draft) => {
        draft.order = lastOrder++;
      });
      form.questions.push(question);
    },
    questionEdited(form, action) {
      const index = form.questions.findIndex(
        (qu) => qu.order === action.payload.question.order
      );
      form.questions[index] = action.payload.question;
    },
    questionReqToggled(form, action) {
      const index = form.questions.findIndex(
        (qu) => qu.order === action.payload
      );
      form.questions[index].required = !form.questions[index].required;
    },
    questionReordered(form, action) {
      if (
        action.payload.replace !== -1 &&
        action.payload.replace !== form.questions.length
      ) {
        const OrIndex = form.questions.findIndex(
          (qu) => qu.order === action.payload.order
        );
        const ReIndex = form.questions.findIndex(
          (qu) => qu.order === action.payload.replace
        );
        form.questions[OrIndex].order = ReIndex;
        form.questions[ReIndex].order = OrIndex;
        const removedItem = form.questions.splice(
          ReIndex,
          1,
          form.questions[OrIndex]
        );
        form.questions.splice(OrIndex, 1, removedItem[0]);
      }
    },
  },
});

export const {
  questionReordered,
  questionAdded,
  questionEdited,
  questionReqToggled,
} = slice.actions;
export default slice.reducer;
