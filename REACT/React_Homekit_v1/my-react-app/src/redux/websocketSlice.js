//websocketSlice.js
// Importamos la función createSlice de Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Creamos un slice para el websocket
export const websocketSlice = createSlice({
  // Nombre del slice
  name: "websocket",
  // Estado inicial
  initialState: {
    // Usamos un objeto en lugar de un valor nulo para mantener los datos de los sensores
    data: {},
    // Estado inicial de la conexión
    isConnected: false,
  },
  // Reductores
  reducers: {
    // Cambia isConnected a true
    connected: (state) => {
      state.isConnected = true;
    },
    // Cambia isConnected a false
    disconnected: (state) => {
      state.isConnected = false;
    },
    // Recibe datos del websocket y los almacena en el estado
    receivedData: (state, action) => {
      const { id, status } = action.payload;
      // console.log("Data en reducer:", id, status); // Añade esta línea
      state.data[id] = status;
    },
  },
});
// Aquí añadimos un nuevo reductor para manejar la carga de datos desde la API
export const loadDataFromAPI = () => async (dispatch) => {
  try {
    const response = await axios.get("http://192.168.10.35:5000/motionSensor");
    console.log("API response:", response.data); // Añadir log aquí
    const data = response.data;
    dispatch(receivedData({ id: "motion1", status: data.motion1 }));
    dispatch(receivedData({ id: "motion2", status: data.motion2 }));
    dispatch(receivedData({ id: "motion3", status: data.motion3 }));
    dispatch(receivedData({ id: "motion4", status: data.motion4 }));
  } catch (error) {
    console.error("Error cargando datos desde la API:", error);
  }
};
export const updateDataToAPI = (id, status) => async (dispatch) => {
  try {
    // Obtener el estado actual de todos los sensores
    const response = await axios.get("http://192.168.10.35:5000/motionSensor");
    const currentData = response.data;
    // Actualizar el estado del sensor relevante
    currentData[id] = status;
    // Enviar de vuelta todo el objeto actualizado
    await axios.put("http://192.168.10.35:5000/motionSensor", currentData);
    // Una vez actualizado el servidor, sincroniza los datos con la app
    dispatch(loadDataFromAPI());
  } catch (error) {
    console.error("Error actualizando datos en la API:", error);
  }
};
// Exportamos las acciones para ser usadas en otros archivos
export const { connected, disconnected, receivedData } = websocketSlice.actions;

// Selector para obtener datos de los sensores del estado global
export const selectData = (state) => state.websocket.data;

// Selector para obtener el estado de conexión del websocket del estado global
export const selectIsConnected = (state) => state.websocket.isConnected;

// Exportamos el reductor por defecto
export default websocketSlice.reducer;
