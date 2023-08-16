// Importando las dependencias necesarias de React
import { useState, useEffect } from "react";

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

  // Efecto que se ejecutará una vez al montar el componente
  useEffect(() => {
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

    // Limpiando el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // El array de dependencias vacío asegura que useEffect se ejecute solo una vez

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
