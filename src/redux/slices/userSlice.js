import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearToken } from "./authSlice.js";
import { upperCaseResponse } from "../../utils/index.js";

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
        return;
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

export const setUserPin = createAsyncThunk(
  "set_pin",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/set-pin`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
          body: JSON.stringify(payload.pin),
        },
      );

      if (response.status === 401) {
        dispatch(clearToken());
      }

      if (!response.ok) {
        throw await response.json();
      }

      return { next: payload.next };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteImage = createAsyncThunk(
  "delete_image",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/image`,
        {
          method: "DELETE",
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

export const editProfile = createAsyncThunk(
  "edit_profile",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
          body: payload.body,
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

      return { data, next: payload.next };
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
    return builder
      .addAsyncThunk(getUserInfo, {
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
      })
      .addAsyncThunk(setUserPin, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          if (payload.next) {
            payload.next("Pin setted successfully");
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload.message;
        },
      })
      .addAsyncThunk(editProfile, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.user = payload.data.data;
          if (payload.next) {
            payload.next(upperCaseResponse(payload.data));
          }
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
