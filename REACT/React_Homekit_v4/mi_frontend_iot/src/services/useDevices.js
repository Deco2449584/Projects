import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:3000";

function useDevice() {
  const [deviceData, setDeviceData] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketConnection = io(SERVER_URL);
    setSocket(socketConnection);

    socketConnection.on("mqtt", (data) => {
      console.log("Mensaje recibido del servidor:", data);
      setDeviceData(data);
    });

    // Al desmontar el componente, desconectar el socket
    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const sendMessage = (data) => {
    if (socket) {
      socket.emit("sendToMqtt", data);
      console.log("Mensaje enviado al servidor:", data);
    } else {
      console.error("Socket no está conectado.");
    }
  };

  return {
    deviceData,
    sendMessage,
  };
}

export default useDevice;
