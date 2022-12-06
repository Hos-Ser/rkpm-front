import { combineReducers } from "@reduxjs/toolkit";
import questionList from "./questionList";
import questionTemplate from "./questionTemplate";

export default combineReducers({
  questionList,
  questionTemplate,
});
