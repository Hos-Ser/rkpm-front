import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import questionReducer from "./questionReducer";

export default combineReducers({
  auth,
  questions: questionReducer,
});
