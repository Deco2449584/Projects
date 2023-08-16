// store.js
import { configureStore } from "@reduxjs/toolkit";
import websocketReducer from "./websocketSlice";

export const store = configureStore({
  reducer: {
    websocket: websocketReducer,
  },
});
