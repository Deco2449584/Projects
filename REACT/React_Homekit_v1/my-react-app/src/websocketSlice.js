// websocketSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const websocketSlice = createSlice({
  name: "websocket",
  initialState: {
    data: null,
    isConnected: false,
  },
  reducers: {
    connected: (state) => {
      state.isConnected = true;
    },
    disconnected: (state) => {
      state.isConnected = false;
    },
    receivedData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { connected, disconnected, receivedData } = websocketSlice.actions;

export const selectData = (state) => state.websocket.data;
export const selectIsConnected = (state) => state.websocket.isConnected;

export default websocketSlice.reducer;
