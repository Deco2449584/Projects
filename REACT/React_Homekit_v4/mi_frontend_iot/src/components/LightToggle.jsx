//LightToggle.jsx
import { useState, useEffect } from "react"; // Agrega useEffect
import PropTypes from "prop-types";
import "./LightToggle.scss";

function LightToggle({ status = false, onToggle }) {
  const [isActive, setIsActive] = useState(status);

  useEffect(() => {
    setIsActive(status);
  }, [status]);
  const handleToggle = () => {
    const newState = !isActive;
    console.log("Enviando nuevo estado:", newState); // Agregamos esta línea
    setIsActive(newState);
    // Llamar a la función onToggle con el nuevo estado si está definida
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <button
      className={`light-toggle ${isActive ? "active" : ""}`}
      onClick={handleToggle}
    >
      {isActive ? "Encendido" : "Apagado"}
    </button>
  );
}

LightToggle.propTypes = {
  onToggle: PropTypes.func,
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
};

export default LightToggle;
