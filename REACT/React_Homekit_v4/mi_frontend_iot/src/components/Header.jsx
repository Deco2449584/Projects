//header.jsx
import "./scss/Header.scss";
import PropTypes from "prop-types"; // Importa PropTypes.
// Importamos el componente Sensor de la carpeta "components".
import Sensor from "../components/Devices/Sensor";
// Importamos el componente MotionSensor de la carpeta "components".
import MotionSensor from "../components/Devices/MotionSensor";
function Header({ deviceData }) {
  // Retornamos el JSX para renderizar el componente.
  return (
    // Contenedor principal.
    <div className="header">
      {/* Verificamos si deviceData tiene datos antes de intentar mapearlo. */}
      {deviceData &&
        // Mapeamos cada dispositivo dentro de deviceData.
        deviceData.map((device) => {
          // Si el tipo de dispositivo es "sensor" y tiene un valor distinto de null, renderizamos el componente Sensor.
          if (device.type === "sensor" && device.value !== null) {
            return (
              <Sensor
                key={device.id} // Key único para la lista de componentes.
                id={device.id} // ID del dispositivo.
                name={device.name} // nombre del dispositivo.
                value={device.value} // Valor del sensor.
              />
            );
          }

          // Si el tipo de dispositivo es "motion", renderizamos el componente MotionSensor.
          if (device.type === "motion") {
            return (
              <MotionSensor
                key={device.id} // Key único para la lista de componentes.
                id={device.id} // ID del dispositivo.
                name={device.name} // nombre del dispositivo.
                status={device.status} // Estado actual del sensor de movimiento.
              />
            );
          }

          // Si el dispositivo no cumple con ninguno de los tipos anteriores, no renderizamos nada.
          return null;
        })}
    </div>
  );
}
// Define las PropTypes para tu componente Header.
Header.propTypes = {
  deviceData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.bool,
      type: PropTypes.string.isRequired,
      value: PropTypes.number,
    })
  ).isRequired,
};
export default Header;
