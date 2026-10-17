import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import persistStore from "redux-persist/es/persistStore";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import profileReducer from "./slices/profileSlice";

const storage = {
  getItem: (key) => {
    return Promise.resolve(window.localStorage.getItem(key));
  },
  setItem: (key, value) => {
    return Promise.resolve(window.localStorage.setItem(key, value));
  },
  removeItem: (key) => {
    return Promise.resolve(window.localStorage.removeItem(key));
  },
};

const persistAuthConfig = {
  key: "token",
  storage,
  whitelist: ["auth"],
};

const store = configureStore({
  reducer: {
    authState: persistReducer(persistAuthConfig, authReducer),
    userState: userReducer,
    profileState: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: [
          "payload.next",
          "meta.arg.next",
          "payload",
          "meta.arg.body",
        ],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
