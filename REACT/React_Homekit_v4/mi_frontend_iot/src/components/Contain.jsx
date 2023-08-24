import "./scss/Contain.scss";
import PropTypes from "prop-types"; // Paso 2: Importa PropTypes.
// Importamos el componente Light de la carpeta "components".
import Light from "../components/Devices/Light";

// Importamos el componente Fondo de la carpeta "components".
// Definimos el componente principal Contain.
function Contain({ deviceData, sendMessage }) {
  // Retornamos el JSX para renderizar el componente.
  return (
    // Contenedor principal.
    <div className="Contain">
      {/* Verificamos si deviceData tiene datos antes de intentar mapearlo. */}
      {deviceData &&
        // Mapeamos cada dispositivo dentro de deviceData.
        deviceData.map((device) => {
          // Si el tipo de dispositivo es "light", renderizamos el componente Light.
          if (device.type === "light") {
            return (
              <Light
                key={device.id} // Key único para la lista de componentes.
                id={device.id} // ID del dispositivo.
                name={device.name} // nombre del dispositivo.
                status={device.status} // Estado actual del dispositivo.
                sendMessage={sendMessage} // Función para enviar mensajes al backend.
              />
            );
          }
          // Si el dispositivo no cumple con ninguno de los tipos anteriores, no renderizamos nada.
          return null;
        })}
    </div>
  );
}
Contain.propTypes = {
  deviceData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.bool,
      type: PropTypes.string.isRequired,
      value: PropTypes.number,
    })
  ).isRequired,
  sendMessage: PropTypes.func.isRequired,
};
// Exportamos el componente Contain como default para usarlo en otros archivos.
export default Contain;
