import PropTypes from "prop-types";
import "./MotionSensor.scss";
import { FaRunning } from "react-icons/fa"; // Ícono que representa movimiento

const MotionSensor = ({ id, status }) => {
  return (
    <div
      className={`motion-sensor-container ${
        status === "true" ? "active" : "inactive"
      }`}
    >
      <FaRunning className="motion-sensor-icon" />
      Motion Sensor {id}
    </div>
  );
};

MotionSensor.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default MotionSensor;
