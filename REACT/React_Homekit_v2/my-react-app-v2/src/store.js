// store.js

// Importa las herramientas necesarias de Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importa el reducer del slice de WebSocket
import websocketReducer from "./websocketSlice";

/**
 * Configura y crea el store de Redux para la aplicación.
 * El store se crea usando Redux Toolkit, lo que simplifica mucho la configuración.
 */
export const store = configureStore({
  reducer: {
    websocket: websocketReducer, // Asigna el reducer de WebSocket al campo "websocket" del estado global
  },
});
