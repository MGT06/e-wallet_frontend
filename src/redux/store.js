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
        ],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
