//Sensor.jsx
import PropTypes from "prop-types"; // Importa PropTypes
import "./Sensor.scss";

function Sensor({ id, type, status, value }) {
  return (
    <div className="sensor">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Sensor</h2>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Estado:</strong> {value ? value : status.toString()}
      </p>
    </div>
  );
}

// Define las validaciones de props para el componente Sensor
Sensor.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.number,
};

export default Sensor;
