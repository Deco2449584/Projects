//app.jsx
// Importando las dependencias necesarias de React y Redux
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connected, disconnected, updateDataToAPI } from "./websocketSlice"; // Asumiendo que tienes el slice en el mismo directorio
import { loadDataFromAPI } from "./websocketSlice"; // Importamos la función de acción que acabamos de crear

// Importando componentes internos que se usarán en este archivo
/* import Sidebar from "./components/Sidebar";
 */ import Contenido from "./components/Contenido";
import Header from "./components/Header";
import Fondo from "./components/Pruebas/Fondo";

// Importando los estilos para la App
import "./scss/App.scss";
// Definiendo el componente App
const App = () => {
  // Obtener el dispatch para lanzar acciones de Redux
  const dispatch = useDispatch();

  // Efecto que se ejecutará una vez al montar el componente
  useEffect(() => {
    // Estableciendo la conexión WebSocket
    const ws = new WebSocket("ws://192.168.10.33:1880/ws/example");

    // Evento que se ejecuta cuando la conexión es exitosa
    ws.onopen = () => {
      dispatch(connected());
      dispatch(loadDataFromAPI()); // Añadir esta línea aquí
    };

    // Evento que se ejecuta cuando la conexión se cierra
    ws.onclose = () => {
      dispatch(disconnected());
    };

    // Evento que se ejecuta cuando se recibe un mensaje del servidor WebSocket
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Primero actualizamos el servidor con los datos recibidos
      dispatch(updateDataToAPI(data.id, data.status));
    };

    return () => {
      ws.close();
    };
  }, [dispatch]); // Agregamos dispatch al array de dependencias para evitar advertencias

  // Renderizando el JSX del componente
  return (
    <div className="container">
      {/* Componentes del encabezado, barra lateral y contenido */}
      <Header />
      <Contenido />
      <Fondo />
    </div>
  );
};

// Exportando el componente App para ser utilizado en otros lugares
export default App;
