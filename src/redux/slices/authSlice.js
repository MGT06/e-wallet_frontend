import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
          body: JSON.stringify(payload.body),
        },
      );

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(registerThunk, {
      pending: (state) => {
        state.isPending = true;
        state.isRejected = false;
        state.isFulfilled = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        if (payload.next) {
          payload.next(payload.message);
        }
      },
      rejected: (state, { payload }) => {
        const message = [...payload.message];
        message[0] = message[0].toUpperCase();
        const fixMessage = message.join("");
        state.error = fixMessage;
        state.isPending = false;
        state.isRejected = true;
      },
    });
  },
});

export default authSlice.reducer;
