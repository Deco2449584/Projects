const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mqttClient = require("./mqtt");
const db = require("./database");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Para recibir actualizaciones en tiempo real del broker MQTT y enviarlas al frontend.
mqttClient.on("message", function (topic, message) {
  io.emit("mqtt", { topic, message: message.toString() });

  // Aquí también puedes almacenar los datos recibidos en SQLite si es necesario.
  // db.run(...)
});

// Configura CORS para permitir la conexión desde tu frontend.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/devices", (req, res) => {
  db.all("SELECT * FROM devices", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ devices: rows });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
