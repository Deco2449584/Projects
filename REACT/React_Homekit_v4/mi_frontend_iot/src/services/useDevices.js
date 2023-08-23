import { useState, useEffect } from "react";
import io from "socket.io-client";

function useDevices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/devices")
      .then((response) => response.json())
      .then((data) => {
        const uniqueDevices = {};

        data.devices.forEach((device) => {
          uniqueDevices[device.id] = device;
        });

        setDevices(Object.values(uniqueDevices));
      })
      .catch((error) => {
        console.error("Error fetching devices:", error);
      });

    const socket = io("http://localhost:3000");

    socket.on("mqtt", (data) => {
      setDevices((prevDevices) => {
        const deviceMap = {};

        prevDevices.forEach((device) => {
          deviceMap[device.id] = device;
        });

        deviceMap[data.id] = data;

        return Object.values(deviceMap);
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return devices;
}

export default useDevices;
