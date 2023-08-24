// Middleware para validar la información del dispositivo que se recibe en las solicitudes HTTP.
const validateDevice = (req, res, next) => {
  // Extraemos los campos id, type y status del cuerpo de la solicitud.
  const { id, type, status } = req.body;

  // Verificamos si alguno de los campos no está presente o es undefined.
  if (!id || !type || !status) {
    // Si falta alguno de estos campos, respondemos con un estado HTTP 400 (Solicitud incorrecta) y un mensaje de error.
    res.status(400).send("Datos del dispositivo no válidos");
    return; // Finalizamos la ejecución del middleware.
  }

  // Si todo está en orden, pasamos al siguiente middleware o controlador.
  next();
};

// Exportamos el middleware para poder usarlo en otros archivos.
export default validateDevice;
