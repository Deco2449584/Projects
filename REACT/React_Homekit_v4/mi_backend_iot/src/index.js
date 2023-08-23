// index.js

// Importa las bibliotecas necesarias para el servidor.
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mqttClient = require("./mqtt");
const db = require("./database");
const cors = require("cors");

// Crea una nueva instancia de Express.
const app = express();

// Crea un servidor HTTP basado en Express.
const server = http.createServer(app);

// Configura socket.io para trabajar con el servidor HTTP y aceptar conexiones CORS.
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// Escucha los mensajes que llegan del broker MQTT.
mqttClient.on("message", function (topic, message) {
  // Parsea el mensaje como JSON
  const parsedMessage = JSON.parse(message.toString());
  // Emite el mensaje a los clientes conectados a través de socket.io.
  io.emit("mqtt", parsedMessage);
  // Puedes almacenar el mensaje en la base de datos aquí.
});

// Configura CORS (Cross-Origin Resource Sharing) para permitir la conexión desde los frontends especificados.
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Define una ruta API para consultar todos los dispositivos y sus datos.
app.get("/devices", (req, res) => {
  // Consulta la base de datos.
  db.all("SELECT * FROM devices", [], (err, rows) => {
    if (err) {
      // En caso de error, devuelve un error 500.
      res.status(500).json({ error: err.message });
      return;
    }
    // En caso de éxito, devuelve los datos consultados.
    res.json({ devices: rows });
  });
});

// Define el puerto para el servidor y comienza a escuchar las conexiones.
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
