//app.jsx
import { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.scss";

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Obtener datos de la base de datos al cargar la página.
    fetch("http://localhost:3000/devices")
      .then((response) => response.json())
      .then((data) => {
        setDevices(data.devices);
      })
      .catch((error) => {
        console.error("Error fetching devices:", error);
      });

    const socket = io("http://localhost:3000");

    socket.on("mqtt", (data) => {
      setDevices((prevDevices) => [...prevDevices, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1>Dispositivos IoT</h1>
      <div className="device-list">
        {devices.map((device, index) => (
          <li key={index}>
            ID: {device.id}, Tipo: {device.type}, Estado:{" "}
            {device.status.toString()}
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
