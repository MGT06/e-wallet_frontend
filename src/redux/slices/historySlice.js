import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearToken } from "./authSlice";
import { upperCaseResponse } from "../../utils";

const initialState = {
  history: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const getHistory = createAsyncThunk(
  "get_history",
  async (payload, { getState, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${payload.params}`,
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

export const nextPage = createAsyncThunk(
  "next_page",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${payload}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();

      if (response.status === 401) {
        dispatch(clearToken());
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

export const prevPage = createAsyncThunk(
  "next_page",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${payload}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();

      if (response.status === 401) {
        dispatch(clearToken());
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

export const deleteHistory = createAsyncThunk(
  "delete_history",
  async (payload, { dispatch, getState, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const respone = await fetch(
        `${import.meta.env.VITE_API_URL}/user/history`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload.body),
        },
      );
      const data = await respone.json();

      if (respone.status === 401) {
        dispatch(clearToken);
      }
      if (!respone.ok) {
        throw { data, setErr: payload.setErr };
      }

      dispatch(getHistory({ params: "/user/history?page=1" }));

      return { data, next: payload.next };
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
    return builder
      .addAsyncThunk(getHistory, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.history = payload.data;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = false;
          state.error = payload.message;
        },
      })
      .addAsyncThunk(nextPage, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.history = payload.data;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = false;
          state.error = payload.message;
        },
      })
      .addAsyncThunk(prevPage, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.history = payload.data;
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = false;
          state.error = payload.message;
        },
      })
      .addAsyncThunk(deleteHistory, {
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
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = false;
          if (payload.setErr) {
            payload.setErr(upperCaseResponse(payload.data));
          }
        },
      });
  },
});

export default historySlice.reducer;
