// app.jsx
// Dependencias
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  connected,
  disconnected,
  updateDataToAPI,
  loadDataFromAPI,
} from "./websocketSlice";

// Componentes
import Sidebar from "./components/Sidebar";
import Contenido from "./components/Contenido";
import Header from "./components/Header";
import Fondo from "./components/Pruebas/Fondo";

// Estilos
import "./scss/App.scss";

/**
 * Componente principal de la aplicación.
 * Este componente gestiona la conexión WebSocket y renderiza los componentes principales de la interfaz.
 */
const App = () => {
  // Hook de Redux para dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // Iniciar conexión WebSocket
    const ws = new WebSocket("ws://192.168.10.33:1880/ws/example");

    // En conexión exitosa, marca el estado como conectado y carga datos iniciales
    ws.onopen = () => {
      dispatch(connected());
      dispatch(loadDataFromAPI());
    };

    // En desconexión, marca el estado como desconectado
    ws.onclose = () => {
      dispatch(disconnected());
    };

    // Al recibir un mensaje del servidor, actualiza los datos en el servidor
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(updateDataToAPI(data.id, data.status));
    };

    // Cerrar conexión WebSocket en desmontaje
    return () => {
      ws.close();
    };
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Contenido />
      <Fondo />
      <Sidebar />
    </div>
  );
};

export default App;
