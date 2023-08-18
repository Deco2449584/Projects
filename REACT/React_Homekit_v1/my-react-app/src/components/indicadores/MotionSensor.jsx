//motionsensor.jsx
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectData } from "../../websocketSlice";
import { FaWalking } from "react-icons/fa"; // Asegúrate de tener esta importación para el icono
import "../../scss/components/indicadores/MotionSensor.scss";

const MotionSensor = ({ id }) => {
  const sensorData = useSelector(selectData);
  //console.log("sensorData:", sensorData);
  const motionStatus = sensorData && sensorData[id];

  //console.log(`motionStatus for ${id}:`, motionStatus);

  return (
    <div className={`motion-sensor ${motionStatus ? "active" : ""}`}>
      <FaWalking size={30} />
      <p>{id}</p>
    </div>
  );
};

MotionSensor.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MotionSensor;
