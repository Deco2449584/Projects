import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Contenido from "./components/Contenido";
import Header from "./components/Header";
import "./scss/App.scss";
import image1 from "./assets/1316292.jpeg";
import image2 from "./assets/1319293.jpeg";
import image3 from "./assets/640956.jpg";

const backgrounds = [image1, image2, image3];

const App = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Aumenta la opacidad de la imagen `.next`
      document.querySelector(
        ".contenedor .background-image.next"
      ).style.opacity = 1;

      setTimeout(() => {
        setCurrentBackground(
          (prevBackground) => (prevBackground + 1) % backgrounds.length
        );
        // Resetea la opacidad para el siguiente ciclo
        document.querySelector(
          ".contenedor .background-image.next"
        ).style.opacity = 0;
      }, 2000); // Ajusta este valor de acuerdo con la duración de tu transición (2 segundos en este caso)
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contenedor">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
      ></div>
      <div
        className="background-image next"
        style={{
          backgroundImage: `url(${
            backgrounds[(currentBackground + 1) % backgrounds.length]
          })`,
        }}
      ></div>
      <Header />
      <Sidebar />
      <Contenido />
    </div>
  );
};

export default App;
