import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:3000");

const getLastStateForEachDevice = (devices) => {
  const deviceMap = new Map();
  // Procesamos los dispositivos para obtener el último estado de cada uno
  devices.forEach((device) => {
    const existingDevice = deviceMap.get(device.id);
    if (!existingDevice || existingDevice.timestamp < device.timestamp) {
      deviceMap.set(device.id, device);
    }
  });

  return [...deviceMap.values()];
};

const useDevice = () => {
  const [deviceData, setDeviceData] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch("http://localhost:3000/devices");
        const data = await response.json();

        if (data.devices && data.devices.length > 0) {
          const processedData = getLastStateForEachDevice(data.devices);
          setDeviceData(processedData);
          console.log("Datos procesados:", processedData); // Log de los datos procesados
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();

    socket.on("mqtt", (data) => {
      console.log("Datos recibidos por Socket.io:", data);
      setDeviceData((prevData) => {
        const updatedData = prevData.map((device) =>
          device.id === data.id && device.type === data.type ? data : device
        );
        return getLastStateForEachDevice(updatedData);
      });
    });
  }, []);

  const sendMessage = (data) => {
    /*     console.log("Estado  actual del boton", data.status); // Log del estado del botón
     */ socket.emit("sendToMqtt", data);
  };

  return { deviceData, sendMessage };
};

export default useDevice;
