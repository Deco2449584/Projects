// database.js
// Importa la biblioteca sqlite3 en modo verboso para obtener más información durante el desarrollo.
const sqlite3 = require("sqlite3").verbose();
// Establece la conexión con la base de datos SQLite y selecciona el archivo "iotData.db" (o lo crea si no existe).
const db = new sqlite3.Database("./iotData.db");
// Envuelve las consultas en una función serialize para garantizar que se ejecuten en serie (una tras otra).
db.serialize(function () {
  // Crea una tabla llamada "devices" si no existe ya en la base de datos.
  db.run(
    "CREATE TABLE IF NOT EXISTS devices (" +
      "id TEXT NOT NULL, " +
      "type TEXT NOT NULL, " +
      "status TEXT NOT NULL, " +
      "value REAL" + // Nueva columna para almacenar valores numéricos
      ")"
  );
});
// Exporta la conexión de la base de datos para que otros archivos puedan usarla.
module.exports = db;
