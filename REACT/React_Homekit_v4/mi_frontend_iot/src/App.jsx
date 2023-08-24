import Light from "./components/Light";
import Sensor from "./components/Sensor";
import useDevice from "./services/useDevices";
import MotionSensor from "./components/MotionSensor";

function App() {
  const { deviceData, sendMessage } = useDevice();

  return (
    <div>
      {deviceData &&
        deviceData.map((device) => {
          if (device.type === "light") {
            return (
              <Light
                key={device.id}
                id={device.id}
                status={device.status}
                sendMessage={sendMessage}
              />
            );
          }

          if (device.type === "sensor" && device.value !== null) {
            return (
              <Sensor key={device.id} id={device.id} value={device.value} />
            );
          }
          if (device.type === "motion") {
            return (
              <MotionSensor
                key={device.id}
                id={device.id}
                status={device.status}
              />
            );
          }

          return null; // Si no cumple con ningún tipo
        })}
    </div>
  );
}

export default App;
