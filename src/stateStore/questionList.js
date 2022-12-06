import { createSlice } from "@reduxjs/toolkit";

let lastID = 0;
const initialState = [];

const slice = createSlice({
  name: "list",
  initialState,
  reducers: {
    // action => action handlers
  },
});

export const {} = slice.actions;
export default slice.reducer;
