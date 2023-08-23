// index.js

// Importa las bibliotecas necesarias para el servidor.
import express from "express";
import http from "http";
import * as socketIo from "socket.io";
import cors from "cors";
import mqttClient from "./mqtt.js";
import db from "./database.js";

const app = express();
const server = http.createServer(app);

// Configuración de Socket.io
const io = new socketIo.Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5500",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// Función para procesar y guardar el mensaje en la base de datos
function processAndSaveMessage(data) {
  try {
    const stmt = db.prepare(
      "INSERT INTO devices (id, type, status, value) VALUES (?, ?, ?, ?)"
    );
    stmt.run(data.id, data.type, data.status, data.value || null);
    stmt.finalize();
  } catch (error) {
    console.error("Error al procesar y guardar el mensaje:", error);
  }
}

// Manejador de mensajes recibidos desde el broker MQTT
mqttClient.on("message", (topic, message) => {
  console.log(`Recibido del broker MQTT desde el tópico "${topic}"`);
  try {
    const parsedMessage = JSON.parse(message.toString());
    processAndSaveMessage(parsedMessage); // Guarda en DB
    io.emit("mqtt", parsedMessage); // Emite a los clientes
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
  }
});

// Manejador para recibir mensajes desde el frontend y enviarlos al broker MQTT
io.on("connection", (socket) => {
  socket.on("sendToMqtt", (data) => {
    console.log("Mensaje recibido desde el frontend");
    if (data.type) {
      mqttClient.publish(data.type, JSON.stringify(data)); // Publica al broker MQTT
      io.emit("mqtt", data); // Emite a los clientes
    } else {
      console.error("Datos incorrectos recibidos desde el frontend");
    }
  });
});
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5500",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
// Configuración de CORS
app.use(cors(corsOptions));

// Endpoint para obtener todos los dispositivos y sus datos
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
