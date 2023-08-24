// Importamos las funciones que necesitamos de React y el cliente de Socket.io.
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

// Establecemos la conexión con el servidor a través de Socket.io.
const socket = io.connect("http://localhost:3000");

// Esta función procesa la lista de dispositivos y devuelve el último estado registrado para cada dispositivo.
const getLastStateForEachDevice = (devices) => {
  const deviceMap = new Map();

  // Iteramos a través de cada dispositivo para determinar cuál es su último estado.
  devices.forEach((device) => {
    const existingDevice = deviceMap.get(device.id);
    if (!existingDevice || existingDevice.timestamp < device.timestamp) {
      deviceMap.set(device.id, device);
    }
  });

  // Devolvemos un array con los últimos estados de cada dispositivo.
  return [...deviceMap.values()];
};

// Este custom hook se encarga de manejar los dispositivos y su comunicación con el servidor.
const useDevice = () => {
  // Estado para almacenar la data de los dispositivos.
  const [deviceData, setDeviceData] = useState([]);

  // El efecto se ejecuta una vez cuando el componente se monta.
  useEffect(() => {
    // Esta función asincrónica obtiene la data inicial de los dispositivos desde el servidor.
    const fetchInitialData = async () => {
      try {
        const response = await fetch("http://localhost:3000/devices");
        const data = await response.json();

        // Si obtenemos datos, los procesamos y actualizamos el estado.
        if (data.devices && data.devices.length > 0) {
          const processedData = getLastStateForEachDevice(data.devices);
          setDeviceData(processedData);
        }
      } catch (error) {
        // Si hay un error al obtener los datos, lo mostramos en la consola.
        console.error("Error fetching initial data:", error);
      }
    };

    // Ejecutamos la función para obtener la data inicial.
    fetchInitialData();

    // Nos suscribimos a los eventos "mqtt" de Socket.io para recibir actualizaciones en tiempo real.
    socket.on("mqtt", (data) => {
      // Actualizamos el estado con la nueva data recibida.
      setDeviceData((prevData) => {
        const updatedData = prevData.map((device) =>
          device.id === data.id && device.type === data.type ? data : device
        );
        return getLastStateForEachDevice(updatedData);
      });
    });
  }, []); // Las dependencias vacías indican que el efecto se ejecuta solo al montarse y desmontarse el componente.

  // Esta función envía mensajes al servidor a través de Socket.io.
  const sendMessage = (data) => {
    socket.emit("sendToMqtt", data);
  };

  // El hook devuelve el estado actual de los dispositivos y la función para enviar mensajes.
  return { deviceData, sendMessage };
};

// Exportamos el custom hook para usarlo en otros componentes.
export default useDevice;
