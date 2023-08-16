// Importamos la función createSlice de Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

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

// Exportamos las acciones para ser usadas en otros archivos
export const { connected, disconnected, receivedData } = websocketSlice.actions;

// Selector para obtener datos de los sensores del estado global
export const selectData = (state) => state.websocket.data;

// Selector para obtener el estado de conexión del websocket del estado global
export const selectIsConnected = (state) => state.websocket.isConnected;

// Exportamos el reductor por defecto
export default websocketSlice.reducer;
