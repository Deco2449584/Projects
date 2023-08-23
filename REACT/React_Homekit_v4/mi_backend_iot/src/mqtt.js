// mqtt.js

// Importa la biblioteca MQTT y establece la conexión con el broker.
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost");
// Importa la conexión de la base de datos SQLite.
const db = require("./database");

// Escucha el evento "connect" para saber cuándo se conecta al broker MQTT.
client.on("connect", function () {
  console.log("Escuhando al broker MQTT");
  // Suscríbete a un tópico en particular.
  client.subscribe("sensor/temperatura");
  client.subscribe("dispositivo/luz");
  client.subscribe("dispositivo/interruptor");
});

// Escucha el evento "message" para recibir mensajes del broker MQTT.
client.on("message", function (topic, message) {
  console.log(`Recibido del tópico "${topic}": ${message.toString()}`);
  const data = JSON.parse(message.toString());
  const stmt = db.prepare(
    "INSERT INTO devices (id, type, status) VALUES (?, ?, ?)"
  );
  stmt.run(data.id, data.type, data.status.toString());
  stmt.finalize();
});

// Exporta el cliente MQTT para que otros archivos puedan usarlo.
module.exports = client;
