// Importa los estilos para las imágenes
import "../../scss/components/Fondo.scss";
import { useState, useEffect } from "react";
import imagen_defecto from "../../assets/1313754.png";
// Usa `import.meta.glob` para obtener todas las imágenes con extensión .jpeg, .jpg y .png
// desde el directorio assets.
const imageModules = import.meta.glob("../../assets/*.{jpeg,jpg,png}");

// Inicializa un array para almacenar las URLs de las imágenes.
let backgrounds = [imagen_defecto];

// Itera sobre cada ruta de imagen en el objeto `imageModules`.
// Carga la imagen de manera dinámica y la almacena en el array `backgrounds`.
for (const path in imageModules) {
  imageModules[path]().then((mod) => {
    backgrounds.push(mod.default);
  });
}

// Define el componente Fondo.
const Fondo = () => {
  // Define un estado para rastrear y configurar el fondo actual.
  const [currentBackground, setCurrentBackground] = useState(0);

  // Usa el hook useEffect para ejecutar lógica cuando el componente se monta.
  useEffect(() => {
    //console.log(backgrounds);
    // Establece un intervalo para cambiar el fondo cada 15 segundos.
    const interval = setInterval(() => {
      // Aumenta la opacidad del siguiente fondo para hacer la transición.
      document.querySelector(
        ".container .background-image.next"
      ).style.opacity = 1;

      // Después de 5 segundos, cambia al siguiente fondo.
      setTimeout(() => {
        setCurrentBackground(
          (prevBackground) => (prevBackground + 1) % backgrounds.length
        );

        // Restablece la opacidad del siguiente fondo para prepararse para la próxima transición.
        document.querySelector(
          ".container .background-image.next"
        ).style.opacity = 0;
      }, 3000);
    }, 15000);

    // Limpia el intervalo cuando el componente se desmonta.
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Renderiza el componente.
  return (
    <>
      {/* Muestra el fondo actual */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
      ></div>

      {/* Muestra el siguiente fondo (con una opacidad inicial de 0 para la transición) */}
      <div
        className="background-image next"
        style={{
          backgroundImage: `url(${
            backgrounds[(currentBackground + 1) % backgrounds.length]
          })`,
        }}
      ></div>
    </>
  );
};

// Exporta el componente Fondo para que pueda ser utilizado en otros lugares del proyecto.
export default Fondo;
