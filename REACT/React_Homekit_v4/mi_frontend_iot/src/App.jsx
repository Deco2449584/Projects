import useDevice from "./services/useDevices";

function App() {
  const { deviceData, sendMessage } = useDevice();

  const handleButtonClick = () => {
    const data = {
      id: "100",
      type: "light",
      status: "true",
      value: 123,
    };
    sendMessage(data);
  };

  return (
    <div>
      {deviceData && (
        <div>
          <p>ID: {deviceData.id}</p>
          <p>Type: {deviceData.type}</p>
          <p>Status: {deviceData.status}</p>
          {deviceData.value && <p>Value: {deviceData.value}</p>}
        </div>
      )}
      <button onClick={handleButtonClick}>Enviar mensaje</button>
    </div>
  );
}

export default App;
