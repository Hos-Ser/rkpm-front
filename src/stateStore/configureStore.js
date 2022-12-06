import { configureStore } from "@reduxjs/toolkit";
import reducer from "./combinedReducers";

export default configureStore({ reducer });
