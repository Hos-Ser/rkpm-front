import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

let lastId = 0;
const initialState = { questions: [], formConfig: {} };

const slice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // action => action handlers
    questionAdded(form, action) {
      const question = produce(action.payload.question, (draft) => {
        draft.id = lastId++;
      });
      form.questions.push(question);
    },
    questionEdited(form, action) {
      const index = form.questions.findIndex(
        (qu) => qu.id === action.payload.question.id
      );
      form.questions[index] = action.payload.question;
    },
  },
});

export const { questionAdded, questionEdited } = slice.actions;
export default slice.reducer;
