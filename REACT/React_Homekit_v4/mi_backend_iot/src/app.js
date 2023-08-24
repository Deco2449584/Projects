// Importaciones de módulos y bibliotecas
import express from "express"; // Framework web para Node.js
import routes from "./routes/index.js"; // Rutas para nuestra aplicación
import errorHandler from "./middlewares/errorHandler.js"; // Middleware para manejar errores
import mqttClient from "./config/mqtt.js"; // Configuración del cliente MQTT
import db from "./config/db.js"; // Configuración de la base de datos SQLite
import cors from "cors"; // Biblioteca para manejar CORS
import * as socketIo from "socket.io"; // Biblioteca Socket.io para comunicación en tiempo real
import http from "http"; // Módulo HTTP nativo de Node.js

const app = express();

// Configuración de CORS para manejar solicitudes de distintos orígenes
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5500",
    "http://localhost:1880",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Aplica el middleware CORS con las opciones definidas
app.use(express.json()); // Parsea las solicitudes con payloads JSON

// Incorporación de las rutas
app.use(routes);

// Creación del servidor HTTP y configuración de Socket.io
const server = http.createServer(app);
const io = new socketIo.Server(server, { cors: corsOptions }); // También aplicamos CORS a Socket.io

// Función que maneja la inserción de datos en la base de datos
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

// Manejador de mensajes recibidos desde MQTT
mqttClient.on("message", (topic, message) => {
  console.log(
    `Recibido del broker MQTT desde el tópico "${topic}" y mensaje ${message}`
  );
  try {
    const parsedMessage = JSON.parse(message.toString());
    processAndSaveMessage(parsedMessage);
    io.emit("mqtt", parsedMessage); // Emitir el mensaje a los clientes conectados a través de Socket.io
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
  }
});

// Lógica de Socket.io para comunicación en tiempo real
io.on("connection", (socket) => {
  socket.on("sendToMqtt", (data) => {
    console.log("Mensaje recibido desde el frontend");
    if (data.type) {
      mqttClient.publish(data.type, JSON.stringify(data)); // Publicar en el tópico MQTT correspondiente
      processAndSaveMessage(data); // Guardar el mensaje en la base de datos
      io.emit("mqtt", data); // Emitir el mensaje a todos los clientes conectados
    } else {
      console.error("Datos incorrectos recibidos desde el frontend");
    }
  });
});

// Middleware para manejar errores. Es importante que se coloque al final
app.use(errorHandler);

// Iniciar el servidor en un puerto específico
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
