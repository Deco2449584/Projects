/* import { useEffect, useState } from "react";

function MotionSensor() {
  const [motionDetected, setMotionDetected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:1880");

    ws.onopen = () => {
      console.log("Conectado al servidor WebSocket");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "motion") {
        setMotionDetected(data.value);
      }
    };

    ws.onclose = () => {
      console.log("Desconectado del servidor WebSocket");
    };

    // Limpieza: cerrar el socket cuando el componente se desmonte
    return () => ws.close();
  }, []);

  return (
    <div>
      <span>Movimiento:</span>
      <span>{motionDetected ? "Detectado" : "No detectado"}</span>
    </div>
  );
}

export default MotionSensor;
 */
