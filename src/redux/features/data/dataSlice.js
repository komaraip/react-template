import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "KomaraIP",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = dataSlice.actions;

export default dataSlice.reducer;
