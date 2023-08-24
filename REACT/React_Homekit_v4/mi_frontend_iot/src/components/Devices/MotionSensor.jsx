// Importamos las propiedades requeridas, los estilos del componente y un ícono para representar movimiento.
import PropTypes from "prop-types";
import "../scss/MotionSensor.scss";
import { FaWalking } from "react-icons/fa";
// Ícono que representa movimiento

// Definimos el componente MotionSensor que recibe las props id y status.
const MotionSensor = ({ name, status }) => {
  return (
    // Renderizamos un contenedor para el sensor.
    // La clase del contenedor se determina en función del estado del sensor: "active" si está detectando movimiento, "inactive" si no lo está.
    <div className={`motion-sensor ${status === "true" ? "active" : ""}`}>
      <FaWalking className="motion-sensor-icon" />
      <p>{name}</p>
    </div>
  );
};

// Usamos PropTypes para definir las propiedades esperadas para el componente.
MotionSensor.propTypes = {
  name: PropTypes.string.isRequired, // El id del dispositivo es requerido y debe ser una cadena.
  status: PropTypes.string.isRequired, // El estado del sensor (detectando movimiento o no) es requerido y debe ser una cadena.
};

// Exportamos el componente MotionSensor para usarlo en otros archivos.
export default MotionSensor;
