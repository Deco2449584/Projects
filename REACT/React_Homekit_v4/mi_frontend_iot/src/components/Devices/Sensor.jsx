// Importamos las propiedades necesarias, los estilos específicos para el componente Sensor y un ícono para representar el sensor.
import PropTypes from "prop-types";
import "../scss/Sensor.scss";
import { FaThermometerHalf } from "react-icons/fa"; // Ícono que representa un termómetro. Se puede cambiar según las necesidades.

// Definimos el componente Sensor que recibe las props id y value.
const Sensor = ({ name, value }) => {
  return (
    // Renderizamos un contenedor para el sensor.
    <div
      className={`sensor ${
        value <= 10 ? "frio" : value <= 20 ? "tibio" : "caliente"
      }`}
    >
      <p>{name}</p>
      <p>{value}</p>
      <FaThermometerHalf />
    </div>
  );
};

// Usamos PropTypes para definir las propiedades esperadas para el componente.
Sensor.propTypes = {
  id: PropTypes.string.isRequired, // El id del dispositivo es requerido y debe ser una cadena.
  name: PropTypes.string.isRequired, // El name del dispositivo es requerido y debe ser una cadena.
  value: PropTypes.number.isRequired, // El valor del sensor es requerido y debe ser un número.
};

// Exportamos el componente Sensor para usarlo en otros archivos.
export default Sensor;
