import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const websocketSlice = createSlice({
  name: "websocket",
  initialState: {
    devices: {}, // Estado consolidado para todos los dispositivos
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
      const { id, status } = action.payload;
      state.devices[id] = status;
    },
    turnOn: (state, action) => {
      state.devices[action.payload] = true;
    },
    turnOff: (state, action) => {
      state.devices[action.payload] = false;
    },
  },
});

export const loadDataFromAPI = () => async (dispatch) => {
  try {
    const response = await axios.get("http://192.168.10.35:5000/devices");
    const data = response.data;
    for (const deviceId in data) {
      dispatch(receivedData({ id: deviceId, status: data[deviceId] }));
    }
  } catch (error) {
    console.error("Error cargando datos desde la API:", error);
  }
};

export const updateDataToAPI = (id, status) => async (dispatch) => {
  try {
    const response = await axios.get("http://192.168.10.35:5000/devices");
    const currentData = response.data;
    currentData[id] = status;
    await axios.put("http://192.168.10.35:5000/devices", currentData);
    dispatch(loadDataFromAPI());
  } catch (error) {
    console.error("Error actualizando datos en la API:", error);
  }
};

export const { connected, disconnected, receivedData, turnOn, turnOff } =
  websocketSlice.actions;

export const selectDeviceStatus = (state, deviceId) =>
  state.websocket.devices[deviceId];

export const selectIsConnected = (state) => state.websocket.isConnected;

export default websocketSlice.reducer;
