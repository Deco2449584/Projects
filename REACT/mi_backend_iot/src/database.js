const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./iotData.db");

// Inicializa la base de datos (puedes adaptar esto según tus necesidades).
db.serialize(function () {
  db.run("CREATE TABLE IF NOT EXISTS devices (id INT, data TEXT)");
});

module.exports = db;
