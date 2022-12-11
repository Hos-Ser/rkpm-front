import { createSlice } from "@reduxjs/toolkit";

// import template from "../questionTemplates";

// const templateFunc = (qType) => {
//   switch (qType) {
//     case "text":
//       return template.text;
//     case "email":
//       return template.email;
//     case "number":
//       return template.number;
//     case "date":
//       return template.date;
//     case "color":
//       return template.color;
//     case "checkbox":
//       return template.checkbox;
//     case "image":
//       return template.image;
//     case "file":
//       return template.file;
//     case "password":
//       return template.password;
//     case "radio":
//       return template.radio;
//     case "range":
//       return template.range;
//     case "url":
//       return template.url;
//     //these dont have a standard input type
//     case "textarea":
//       return template.textarea;
//     case "dropdown":
//       return template.dropdown;
//   }
// };

const initialState = [];

const slice = createSlice({
  name: "list",
  initialState,
  reducers: {
    // action => action handlers
    addQuestion(list, action) {
      const question = action.payload.question;
      list.push(question);
    },
  },
});

export const { addQuestion } = slice.actions;
export default slice.reducer;
