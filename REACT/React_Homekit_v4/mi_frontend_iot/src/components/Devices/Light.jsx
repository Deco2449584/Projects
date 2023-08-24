// Importamos las propiedades necesarias y los estilos específicos para el componente Light.
import PropTypes from "prop-types";
import "../scss/Light.scss";
import { useState, useEffect } from "react";
import { MdHighlight } from "react-icons/md";

// Componente Light que recibe las props id, status inicial y una función para enviar mensajes.
const Light = ({ id, name, status: initialStatus, sendMessage }) => {
  // Definimos un estado local para el estado actual del componente.
  // Este estado inicializa con el valor de la prop "status" que se pasa al componente.
  const [status, setStatus] = useState(initialStatus);

  // Usamos useEffect para "escuchar" cualquier cambio en la prop initialStatus.
  // Si cambia, actualizamos el estado local del componente.
  useEffect(() => {
    setStatus(initialStatus);
  }, [initialStatus]);

  // Esta función se encarga de cambiar el estado del componente Light.
  const toggleStatus = () => {
    // Determinamos el nuevo estado basado en el estado actual.
    const newStatus = status === "true" ? "false" : "true";

    // Actualizamos el estado local con el nuevo valor.
    setStatus(newStatus);

    // Construimos el objeto data para enviar al servidor con la nueva información del estado.
    const data = {
      id: id,
      name: name,
      type: "light",
      status: newStatus,
    };

    // Usamos la función sendMessage (pasada como prop) para enviar la nueva información al servidor.
    sendMessage(data);
  };

  // Renderizamos el componente.
  return (
    // El botón tendrá una clase basada en su estado actual (on/off) y agregamos un manejador de evento al hacer clic.
    <div
      className={`light-button ${status === "true" ? "active" : ""}`}
      onClick={toggleStatus}
    >
      <div className="button-icon">
        <MdHighlight />
      </div>
      <div className="button-label">{name}</div>
      <div className="button-status">{status ? "Encendido" : "Apagado"}</div>
    </div>
  );
};

// Definimos las propiedades esperadas para el componente con PropTypes.
Light.propTypes = {
  id: PropTypes.string.isRequired, // El id del dispositivo es requerido y debe ser una cadena.
  name: PropTypes.string.isRequired, // El name del dispositivo es requerido y debe ser una cadena.
  status: PropTypes.string.isRequired, // El estado del dispositivo es requerido y debe ser una cadena.
  sendMessage: PropTypes.func.isRequired, // La función sendMessage es requerida.
};

// Exportamos el componente Light para usarlo en otros archivos.
export default Light;
