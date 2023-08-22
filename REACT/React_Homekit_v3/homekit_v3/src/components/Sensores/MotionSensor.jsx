// Importa PropTypes para la validación de tipos de propiedades
import PropTypes from "prop-types";

// Importa el hook useSelector de redux para seleccionar datos del estado
import { useSelector } from "react-redux";

// Importa la función selectDeviceStatus desde el archivo websocketSlice para seleccionar datos específicos del estado
import { selectDeviceStatus } from "../../websocketSlice";

// Importa el ícono de caminata desde la librería react-icons para visualizar el estado del sensor
import { FaWalking } from "react-icons/fa";

// Importa los estilos específicos para el componente MotionSensor
import "../../scss/components/indicadores/MotionSensor.scss";

// Define el componente MotionSensor que recibe un id como prop
const MotionSensor = ({ id }) => {
  // Usa el hook useSelector para obtener el estado del dispositivo desde redux
  const motionStatus = useSelector((state) => selectDeviceStatus(state, id));

  // Renderiza el componente
  return (
    // Renderiza un div con una clase condicional basada en el estado del sensor
    // Si el sensor está activo, añade la clase "active"
    <div className={`motion-sensor ${motionStatus ? "active" : ""}`}>
      {/* Renderiza el ícono de caminata */}
      <FaWalking />
      {/* Renderiza el id del sensor */}
      <p>{id}</p>
    </div>
  );
};

// Define las propiedades y tipos esperados para este componente
// En este caso, espera recibir un id como string y es obligatorio
MotionSensor.propTypes = {
  id: PropTypes.string.isRequired,
};

// Exporta el componente MotionSensor para ser usado en otros archivos
export default MotionSensor;
