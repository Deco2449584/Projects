// Importamos los estilos específicos para este componente y las bibliotecas esenciales de React.
import "../scss/components/Principales/Fondo.scss";
import { useState, useEffect, useRef } from "react";

// Importamos una imagen predeterminada en caso de que no haya otras imágenes disponibles o haya un error al cargarlas.
import imagen_defecto from "../assets/1313754.png";

// Cargamos de manera dinámica todas las imágenes de tipo .jpeg, .jpg y .png desde el directorio de assets.
const imageModules = import.meta.glob("../assets/*.{jpeg,jpg,png}");

// Creamos un arreglo para almacenar las rutas de las imágenes de fondo, iniciando con la imagen predeterminada.
let backgrounds = [imagen_defecto];

// Para cada imagen detectada en el directorio, la añadimos al arreglo 'backgrounds'.
for (const path in imageModules) {
  imageModules[path]().then((mod) => {
    backgrounds.push(mod.default);
  });
}

// Creamos el componente principal 'Fondo'.
const Fondo = () => {
  // Esta variable de estado nos permite saber qué imagen de fondo se está mostrando actualmente.
  const [currentBackground, setCurrentBackground] = useState(0);

  // Usamos useRef para tener una referencia del intervalo que cambiará las imágenes, lo que nos permite detenerlo cuando sea necesario.
  const intervalRef = useRef(null);

  // Esta función maneja la transición a la siguiente imagen de fondo.
  const transitionBackground = () => {
    setCurrentBackground(
      (prevBackground) => (prevBackground + 1) % backgrounds.length
    );
  };

  // Esta función se ejecuta automáticamente cuando el componente se monta.
  useEffect(() => {
    // Establecemos un intervalo que cambiará la imagen de fondo cada 15 segundos.
    intervalRef.current = setInterval(transitionBackground, 15000);

    // Esta función se ejecutará cuando el componente se desmonte, deteniendo el intervalo para prevenir errores.
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []); // El arreglo vacío significa que useEffect se ejecuta solo una vez, al montar el componente.

  // Definimos lo que se mostrará en pantalla cuando este componente se utilice.
  return (
    <>
      {/* Mostramos la imagen de fondo actual */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
      ></div>

      {/* Si hay más de una imagen disponible, pre-cargamos la siguiente imagen de fondo detrás de la actual */}
      {backgrounds.length > 1 && (
        <div
          className="background-image next"
          style={{
            backgroundImage: `url(${
              backgrounds[(currentBackground + 1) % backgrounds.length]
            })`,
          }}
        ></div>
      )}
    </>
  );
};

// Hacemos que el componente Fondo esté disponible para ser importado y utilizado en otras partes de la aplicación.
export default Fondo;
