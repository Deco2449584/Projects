// database.js
// Importa la biblioteca sqlite3 en modo verboso para obtener más información durante el desarrollo.
import sqlite3 from "sqlite3";
// Establece la conexión con la base de datos SQLite y selecciona el archivo "iotData.db" (o lo crea si no existe).
const db = new sqlite3.Database("./iotData.db");
// Envuelve las consultas en una función serialize para garantizar que se ejecuten en serie (una tras otra).
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS devices (
      id TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL,
      value REAL
    )
  `);
});
// Exporta la conexión de la base de datos para que otros archivos puedan usarla.
export default db;
