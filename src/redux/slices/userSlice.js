import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {clearToken} from "./authSlice.js";

const initialState = {
  user: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getUserInfo = createAsyncThunk(
  "get_user_info",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/info`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
      );

      if (response.status === 401) {
        dispatch(clearToken());
      }

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getUserInfo, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.user = payload.data;
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload.message;
      },
    });
  },
});

export default userSlice.reducer;
