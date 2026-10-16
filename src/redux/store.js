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
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
});

export const persistor = persistStore(store);
export default store;
