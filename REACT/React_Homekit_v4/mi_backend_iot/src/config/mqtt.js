// Importamos la biblioteca MQTT para establecer comunicación con el broker MQTT.
import mqtt from "mqtt";

// Establecemos la conexión con el broker MQTT que se encuentra en "mqtt://localhost".
const client = mqtt.connect("mqtt://localhost");

// Escuchamos el evento "connect" para saber cuándo se establece conexión con el broker MQTT.
client.on("connect", () => {
  console.log("Escuchando al broker MQTT");
  // Nos suscribimos al tópico "MQTT_BACK" para recibir mensajes.
  client.subscribe("MQTT_BACK");
});

// Exportamos el cliente MQTT para que otros módulos puedan usarlo.
export default client;
