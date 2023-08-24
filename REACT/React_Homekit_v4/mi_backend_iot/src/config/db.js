// Importamos la biblioteca sqlite3 en modo verboso para obtener más información durante el desarrollo.
import sqlite3 from "sqlite3";

// Establecemos la conexión con la base de datos SQLite. Si el archivo "iotData.db" no existe, lo crea.
const db = new sqlite3.Database("./iotData.db");

// Utilizamos serialize para garantizar que las consultas se ejecuten en serie (una tras otra).
db.serialize(() => {
  // Creamos una tabla llamada "devices" si no existe.
  // Define las columnas: id, type, status y value.
  db.run(`
    CREATE TABLE IF NOT EXISTS devices (
      id TEXT NOT NULL,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL,
      value REAL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP

    )
  `);
});

// Exportamos la conexión de la base de datos para que otros módulos puedan usarla.
export default db;
