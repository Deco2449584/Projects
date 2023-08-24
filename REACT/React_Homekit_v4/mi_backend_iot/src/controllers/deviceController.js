//deviceController.js
// Importamos las funciones de nuestro modelo.
import { saveMessage, getAllDevices } from "../models/deviceModel.js";

// Controlador para procesar y guardar un mensaje.
export const processAndSaveMessage = (data) => {
  try {
    // Intentamos guardar el mensaje usando la función del modelo.
    saveMessage(data);
  } catch (error) {
    // Si ocurre un error, lo mostramos en la consola.
    console.error("Error al procesar y guardar el mensaje:", error);
  }
};

// Controlador para obtener y enviar todos los dispositivos al cliente.
export const fetchAllDevices = (req, res) => {
  // Usamos la función del modelo para obtener todos los dispositivos.
  getAllDevices((err, rows) => {
    if (err) {
      // Si hay un error, respondemos con un estado 500 y el mensaje de error.
      res.status(500).json({ error: err.message });
      return;
    }
    // Si todo va bien, respondemos con un estado 200 y los dispositivos obtenidos.
    res.json({ devices: rows });
  });
};
