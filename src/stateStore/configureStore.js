import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "";

export default function () {
  return configureStore({ reducer: reducer });
}
