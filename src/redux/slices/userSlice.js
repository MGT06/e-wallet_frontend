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

export const changePass = createAsyncThunk(
  "change-pass",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/password`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload.data),
        },
      );
      const data = await response.json();

      if (response.status === 401) {
        dispatch(clearToken());
        return rejectWithValue({ message: "Unauthorized" });
      }

      if (!response.ok) {
        const rawMsg = data?.message || data?.error || data?.err || "Failed to change password";
        const formattedMsg = upperCaseResponse({ message: rawMsg });

        if (payload.nextErr) {
          payload.nextErr(formattedMsg);
        }

        return rejectWithValue({ data, message: formattedMsg, nextErr: payload.nextErr });
      }

      return { data, next: payload.next };
    } catch (error) {
      const rawMsg = error?.message || error?.data?.message || "Failed to change password";
      const formattedMsg = upperCaseResponse({ message: rawMsg });

      if (payload?.nextErr) {
        payload.nextErr(formattedMsg);
      }

      return rejectWithValue({ error, message: formattedMsg, nextErr: payload?.nextErr });
    }
  },
);

export const getUserInfo = createAsyncThunk(
  "get_user_info",
  async (_, { dispatch, rejectWithValue, getState }) => {
    const token = getState().authState.auth.token;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/info`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 401) {
        dispatch(clearToken());
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        throw "data";
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getProfile = createAsyncThunk(
  "get_profile",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/profile`,
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

export const deleteImage = createAsyncThunk(
  "delete_image",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/image`,
        {
          method: "DELETE",
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
        throw { data, nextErr: payload.nextErr };
      }

      return { data, next: payload.next };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const checkPin = createAsyncThunk(
  "check_pin",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/user/check-pin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload.cpin),
        },
      );

      const data = await res.json();

      if (res.status === 401) {
        dispatch(clearToken());
        return rejectWithValue({ message: "Unauthorized" });
      }

      if (!res.ok) {
        const rawMsg = data?.message || data?.error || "Check pin failed";
        const formattedMsg = upperCaseResponse({ message: rawMsg });

        if (payload?.nextErr) {
          payload.nextErr(formattedMsg);
        }

        return rejectWithValue({ data, message: formattedMsg, nextErr: payload?.nextErr });
      }

      return { data, next: payload.next };
    } catch (err) {
      const rawMsg = err?.message || "Check pin failed";
      const formattedMsg = upperCaseResponse({ message: rawMsg });

      if (payload?.nextErr) {
        payload.nextErr(formattedMsg);
      }

      return rejectWithValue({ err, message: formattedMsg, nextErr: payload?.nextErr });
    }
  },
);

export const setUserPin = createAsyncThunk(
  "set_pin",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/set-pin`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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

export const editProfile = createAsyncThunk(
  "edit_profile",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/profile`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
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
        throw { data, nextErr: payload.nextErr };
      }

      return { data, next: payload.next };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const changePin = createAsyncThunk(
  "change_pin",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    const token = getState().authState.auth.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/change-pin`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload.cpin),
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
          state.error = payload?.message;
        },
      })
      .addAsyncThunk(getProfile, {
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
      .addAsyncThunk(deleteImage, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          state.user.image_url = "";
          if (payload.next) {
            payload.next(upperCaseResponse(payload.data));
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          state.error = payload.data.message;
          if (payload.nextErr) {
            payload.nextErr();
          }
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
      .addAsyncThunk(checkPin, {
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
          const errorMsg =
            payload?.message ||
            (payload?.data
              ? upperCaseResponse(payload.data)
              : "Check pin failed");
          state.error = errorMsg;
          if (payload?.nextErr) {
            payload.nextErr(errorMsg);
          }
        },
      })
      .addAsyncThunk(changePass, {
        pending: (state) => {
          state.isPending = true;
          state.isFulfilled = false;
          state.isRejected = false;
        },
        fulfilled: (state, { payload }) => {
          state.isPending = false;
          state.isFulfilled = true;
          if (payload.next) {
            payload.next(
              payload.data?.message
                ? upperCaseResponse(payload.data)
                : "Password updated successfully",
            );
          }
        },
        rejected: (state, { payload }) => {
          state.isPending = false;
          state.isRejected = true;
          const errorMsg =
            payload?.message ||
            (payload?.data
              ? upperCaseResponse(payload.data)
              : "Failed to change password");
          state.error = errorMsg;
          if (payload?.nextErr) {
            payload.nextErr(errorMsg);
          }
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
          state.error = payload.data.message;
          if (payload.nextErr) {
            payload.nextErr();
          }
        },
      })
      .addAsyncThunk(changePin, {
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
      });
  },
});

export default userSlice.reducer;
