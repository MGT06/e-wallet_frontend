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
import peopleReducer from "./slices/peopleSlice";
import transactionReducer from "./slices/transactionSlice.js";
import historyReducer from "./slices/historySlice.js";

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
    peopleState: peopleReducer,
    transactionState: transactionReducer,
    historyState: historyReducer,
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
          "meta.arg.nextErr",
          "meta.arg.setErr",
        ],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
