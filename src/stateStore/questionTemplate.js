import { createSlice } from "@reduxjs/toolkit";

const sameInAll = { order: 0, title: "", description: "", required: false };

const initialState = {
  snigleText: { ...sameInAll },
  multipleText: { ...sameInAll },
  email: { ...sameInAll },
  number: { ...sameInAll },
  dropdown: { ...sameInAll },
};

const slice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    // action => action handlers
  },
});

export const { asd } = slice.actions;
export default slice.reducer;
