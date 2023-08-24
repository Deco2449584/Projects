import PropTypes from "prop-types";
import "./Sensor.scss";
import { FaThermometerHalf } from "react-icons/fa"; // Ícono del sensor. Puedes cambiarlo según tu necesidad.

const Sensor = ({ id, value }) => {
  return (
    <div className="sensor-container">
      <FaThermometerHalf className="sensor-icon" />
      <span className="sensor-value">{value}</span>
      Sensor {id}
    </div>
  );
};

Sensor.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Sensor;
