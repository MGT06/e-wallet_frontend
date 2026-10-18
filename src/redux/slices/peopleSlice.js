import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearToken } from "./authSlice";

const initialState = {
  people: null,
  selected: null,
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  error: null,
};

export const findPeople = createAsyncThunk(
  "find_people",
  async (payload, { dispatch, getState, rejectWithValue }) => {
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

      if (response === 401) {
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

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getSelectedUser: (state, { payload }) => {
      state.selected = payload;
    },
  },
  extraReducers: (builder) => {
    return builder.addAsyncThunk(findPeople, {
      pending: (state) => {
        state.isPending = true;
        state.isFulfilled = false;
        state.isRejected = false;
      },
      fulfilled: (state, { payload }) => {
        state.isPending = false;
        state.isFulfilled = true;
        state.people = payload.data.data;
      },
      rejected: (state, { payload }) => {
        state.isPending = false;
        state.isRejected = true;
        state.error = payload.message;
      },
    });
  },
});

export const { getSelectedUser } = peopleSlice.actions;
export default peopleSlice.reducer;
