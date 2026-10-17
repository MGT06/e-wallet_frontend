import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { clearToken } from "./authSlice";

const initialState = {
  profile: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getProfile = createAsyncThunk(
  "get_profile",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
      );
      const data = await response.json();

      if (response.status === 401) {
        dispatch(clearToken());
        return;
      }

      if (!response.ok) {
        throw data;
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getProfile, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.profile = payload.data;
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload.message;
      },
    });
  },
});

export default profileSlice.reducer;
