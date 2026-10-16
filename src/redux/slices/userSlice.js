import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
