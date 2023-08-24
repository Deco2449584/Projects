// Middleware para manejar errores generales en las solicitudes HTTP.
const errorHandler = (err, req, res, next) => {
  // Imprimimos el error en consola con su pila de llamadas.
  console.error(err.stack);
  // Respondemos al cliente con un estado HTTP 500 (Error Interno del Servidor) y un mensaje genérico.
  res.status(500).send("¡Algo salió mal!");
};

// Exportamos el middleware para poder usarlo en otros archivos.
export default errorHandler;
