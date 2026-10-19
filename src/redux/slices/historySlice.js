import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getHistory = createAsyncThunk(
  "get_history",
  async (_, { getState, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/history`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder.addAsyncThunk(getHistory, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.history = payload.data.data;
        console.log(payload)
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = false;
        state.error = payload.message;
      },
    });
  },
});

export default historySlice.reducer;
