import Light from "./components/Light";
import useDevice from "./services/useDevices";

function App() {
  const { deviceData, sendMessage } = useDevice();

  return (
    <div>
      {deviceData &&
        deviceData.map((device) => {
          // Validación para el tipo de componente
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
          // Aquí puedes agregar más condiciones para otros tipos de dispositivos
          // Por ejemplo:
          // if (device.type === "sensor") {
          //   return <Sensor ...props />;
          // }
          return null; // Si no cumple con ningún tipo
        })}
    </div>
  );
}

export default App;
