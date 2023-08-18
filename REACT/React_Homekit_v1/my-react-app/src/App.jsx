//app.jsx
// Importando las dependencias necesarias de React y Redux
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { connected, disconnected, updateDataToAPI } from "./websocketSlice"; // Asumiendo que tienes el slice en el mismo directorio
import { loadDataFromAPI } from "./websocketSlice"; // Importamos la función de acción que acabamos de crear

// Importando componentes internos que se usarán en este archivo
import Sidebar from "./components/Sidebar";
import Contenido from "./components/Contenido";
import Header from "./components/Header";

// Importando los estilos para la App
import "./scss/App.scss";

// Importando las imágenes que se usarán como fondos
import image1 from "./assets/1316292.jpeg";
import image2 from "./assets/1319293.jpeg";
import image3 from "./assets/640956.jpg";

// Creando un array de las imágenes para facilitar su rotación
const backgrounds = [image1, image2, image3];

// Definiendo el componente App
const App = () => {
  // Estado para rastrear y configurar el fondo actual
  const [currentBackground, setCurrentBackground] = useState(0);

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
    // Estableciendo un intervalo para cambiar el fondo
    const interval = setInterval(() => {
      // Aumentando la opacidad de la imagen siguiente
      document.querySelector(
        ".contenedor .background-image.next"
      ).style.opacity = 1;

      // Después de un retardo, cambia al siguiente fondo
      setTimeout(() => {
        setCurrentBackground(
          (prevBackground) => (prevBackground + 1) % backgrounds.length
        );
        // Reseteando la opacidad para el siguiente ciclo
        document.querySelector(
          ".contenedor .background-image.next"
        ).style.opacity = 0;
      }, 5000); // Retardo de 5 segundos
    }, 15000); // Cambio de imagen cada 15 segundos

    // Limpiando el intervalo y cerrando la conexión WebSocket cuando el componente se desmonte
    return () => {
      clearInterval(interval);
      ws.close();
    };
  }, [dispatch]); // Agregamos dispatch al array de dependencias para evitar advertencias

  // Renderizando el JSX del componente
  return (
    <div className="contenedor">
      {/* Fondo actual */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
      ></div>

      {/* Fondo siguiente (con opacidad inicial de 0) */}
      <div
        className="background-image next"
        style={{
          backgroundImage: `url(${
            backgrounds[(currentBackground + 1) % backgrounds.length]
          })`,
        }}
      ></div>

      {/* Componentes del encabezado, barra lateral y contenido */}
      <Header />
      <Sidebar />
      <Contenido />
    </div>
  );
};

// Exportando el componente App para ser utilizado en otros lugares
export default App;
