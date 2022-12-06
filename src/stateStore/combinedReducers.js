import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import questionList from "./questionList";

export default combineReducers({
  auth,
  questions: questionList,
});
