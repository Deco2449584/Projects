const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost"); // Asume que el broker MQTT (Mosquitto) está corriendo en el mismo dispositivo.
const db = require("./database");

client.on("connect", function () {
  console.log("Conectado al broker MQTT");
  // Puedes suscribirte a los tópicos aquí si es necesario.
  client.subscribe("prueba");
});
client.on("message", function (topic, message) {
  console.log(`Recibido del tópico "${topic}": ${message.toString()}`);
  const stmt = db.prepare("INSERT INTO devices (data) VALUES (?)");
  stmt.run(message.toString());
  stmt.finalize();
});

module.exports = client;
