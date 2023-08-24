// Importamos las herramientas necesarias de Express y otros módulos.
import express from "express";
import * as deviceController from "../controllers/deviceController.js";
import validateDevice from "../middlewares/validateDevice.js";

// Creamos un nuevo router de Express.
const router = express.Router();

// Definimos un endpoint GET para obtener todos los dispositivos y sus datos.
router.get("/devices", deviceController.fetchAllDevices);

// Definimos un endpoint POST para procesar y guardar un mensaje.
// Primero se valida el dispositivo usando el middleware, y luego se utiliza el controlador para procesar y guardar.
router.post("/devices", validateDevice, deviceController.processAndSaveMessage);

// Exportamos el router para que pueda ser utilizado en app.js.
export default router;
