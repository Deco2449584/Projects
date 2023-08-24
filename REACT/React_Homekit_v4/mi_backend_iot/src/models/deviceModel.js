//deviceModels.js
// Importamos la conexión a la base de datos.
import db from "../config/db.js";

// Función para guardar un mensaje en la base de datos.
export const saveMessage = (data) => {
  // Preparamos la consulta SQL.
  const stmt = db.prepare(
    "INSERT INTO devices (id, type, status, value) VALUES (?, ?, ?, ?)"
  );
  // Ejecutamos la consulta, insertando los datos proporcionados. Si el valor es nulo, insertamos null.
  stmt.run(data.id, data.type, data.status, data.value || null);
  // Finalizamos la consulta preparada.
  stmt.finalize();
};

// Función para obtener todos los dispositivos de la base de datos.
export const getAllDevices = (callback) => {
  // Ejecutamos una consulta SQL para seleccionar todos los registros de la tabla de dispositivos.
  db.all("SELECT * FROM devices", [], callback);
};
