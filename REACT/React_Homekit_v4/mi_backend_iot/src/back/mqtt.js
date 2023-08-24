// mqtt.js

// Importa la biblioteca MQTT.
import mqtt from "mqtt";

// Establece la conexión con el broker.
const client = mqtt.connect("mqtt://localhost");

// Escucha el evento "connect" para saber cuándo se conecta al broker MQTT.
client.on("connect", () => {
  console.log("Escuchando al broker MQTT");
  client.subscribe("MQTT_BACK");
});

// Exporta el cliente MQTT para que otros archivos puedan usarlo.
export default client;
