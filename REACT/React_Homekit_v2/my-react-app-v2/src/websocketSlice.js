// websocketSlice.js

// Importa las herramientas necesarias de Redux Toolkit y axios para hacer llamadas a la API
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * Slice de Redux para gestionar el estado y las acciones relacionadas con WebSocket y dispositivos.
 */
export const websocketSlice = createSlice({
  name: "websocket",
  initialState: {
    devices: {}, // Almacena el estado de todos los dispositivos
    isConnected: false, // Indica si la aplicación está conectada a través de WebSocket
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

// Función asíncrona para cargar datos desde la API
export const loadDataFromAPI = () => async (dispatch) => {
  try {
    const response = await axios.get("http://192.168.10.99:5000/devices");
    const data = response.data;
    for (const deviceId in data) {
      dispatch(receivedData({ id: deviceId, status: data[deviceId] }));
    }
  } catch (error) {
    console.error("Error cargando datos desde la API:", error);
  }
};

// Función asíncrona para actualizar datos en la API
export const updateDataToAPI = (id, status) => async (dispatch) => {
  try {
    const response = await axios.get("http://192.168.10.99:5000/devices");
    const currentData = response.data;
    currentData[id] = status;
    await axios.put("http://192.168.10.99:5000/devices", currentData);
    dispatch(loadDataFromAPI());
  } catch (error) {
    console.error("Error actualizando datos en la API:", error);
  }
};

// Exporta las acciones generadas por createSlice y selectores útiles
export const { connected, disconnected, receivedData, turnOn, turnOff } =
  websocketSlice.actions;
export const selectDeviceStatus = (state, deviceId) =>
  state.websocket.devices[deviceId];
export const selectIsConnected = (state) => state.websocket.isConnected;

// Exporta el reducer para ser usado en el store
export default websocketSlice.reducer;
