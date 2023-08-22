// Contenido.jsx

// Importando los componentes necesarios para el contenido de la aplicación
import LightButton from "./LightButton";
import WLEDControl from "./WLEDControl";

// Importando los estilos específicos para el componente Contenido
import "../scss/components/Contenido.scss";

/**
 * Componente que define el contenido principal de la aplicación,
 * incluyendo botones de luz y control para WLED.
 */
const Contenido = () => {
  return (
    <div className="contenido">
      {/* Botón de luz para el dispositivo "luz1" */}
      <LightButton id="luz1" />

      {/* Botón de luz para el dispositivo "luz2" */}
      <LightButton id="luz2" />

      {/* Controlador para el dispositivo WLED */}
      <WLEDControl />
    </div>
  );
};

// Exportando el componente Contenido para ser usado en otros lugares
export default Contenido;
