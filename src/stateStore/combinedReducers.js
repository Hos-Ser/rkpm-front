import { combineReducers } from "@reduxjs/toolkit";
import auth from "./authReducer";
import form from "./formReducer";

export default combineReducers({
  auth,
  form,
});
