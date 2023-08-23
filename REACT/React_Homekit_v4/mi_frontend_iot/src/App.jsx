//App.jsx
import useDevices from "./services/useDevices";
import Sensor from "./components/Sensor"; // Importa el componente Sensor
/* import LightToggle from "./components/LightToggle"; // Importa el componente ligth
 */
import "./App.scss";

function App() {
  const devices = useDevices();

  return (
    <div className="App">
      <h1>Dispositivos IoT</h1>
      <div className="device-list">
        {devices.map((device) => {
          switch (device.type) {
            /*   case "ligth":
              return (
                <LightToggle
                  key={device.id}
                  id={device.id}
                  status={device.status}
                />
              ); */
            case "motion":
              return (
                <Sensor
                  key={device.id}
                  id={device.id}
                  type={device.type}
                  status={device.status}
                  value={device.value} // ¡Añadir esta línea!
                />
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;
