import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearToken } from "./authSlice";

const initialState = {
  paymentMethods: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

export const getPaymentMethod = createAsyncThunk(
  "get_payment_method",
  async (_, { dispatch, getState, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/transaction/topup-methode`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

export const topUp = createAsyncThunk(
  "top_up",
  async (payload, { dispatch, getState, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/transaction/topup`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload.body),
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

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getPaymentMethod, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.paymentMethods = payload.data;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload.message;
        },
      })
      .addAsyncThunk(topUp, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          if (payload.next) {
            payload.next(payload.data.data.payment_url);
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

export default transactionSlice.reducer;
