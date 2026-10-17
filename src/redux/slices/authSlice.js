import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { upperCaseResponse } from "../../utils";

const initialState = {
  auth: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const registerThunk = createAsyncThunk(
  "register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(payload.data),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return { message: data.message, next: payload.next };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const loginThunk = createAsyncThunk(
  "login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(payload.data),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return { data, next: payload.next };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "logout",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        },
      );
      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      return { data, next: payload.next };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearToken: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(registerThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isRejected = false;
          state.isFulfilled = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          if (payload.next) {
            payload.next(upperCaseResponse(payload));
          }
        },
        rejected: (state, { payload }) => {
          state.error = upperCaseResponse(payload);
          state.isPending = false;
          state.isRejected = true;
        },
      })
      .addAsyncThunk(loginThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.auth = { token: payload.data.data.token };
          state.isPending = false;
          state.isFulfilled = true;
          if (payload.next) {
            payload.next(
              upperCaseResponse(payload.data),
              payload.data.data.is_has_pin,
            );
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = upperCaseResponse(payload);
        },
      })
      .addAsyncThunk(logoutThunk, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          if (payload.next) {
            payload.next(upperCaseResponse(payload.data));
          }
          state.auth = null;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload.message;
        },
      });
  },
});

export const {clearToken} = authSlice.actions
export default authSlice.reducer;
