import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import form from "./form";

export default combineReducers({
  auth,
  form,
});
