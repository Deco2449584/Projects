import { useDispatch, useSelector } from "react-redux";
import { MdHighlight } from "react-icons/md";
import "../scss/components/LightButton.scss";
import PropTypes from "prop-types";

// Importa las acciones de tu slice de Redux para actualizar el estado
import { turnOn, turnOff } from "../websocketSlice";

const LightButton = ({ id }) => {
  // Usa useSelector para obtener el estado actual de la luz desde Redux
  const isOn = useSelector((state) => state.websocket.devices[id] || false);

  // Usa useDispatch para despachar acciones a Redux
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isOn) {
      dispatch(turnOff(id));
    } else {
      dispatch(turnOn(id));
    }
  };

  return (
    <div
      className={`light-button ${isOn ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="button-icon">
        <MdHighlight />
      </div>
      <div className="button-label">{id}</div>{" "}
      {/* Mostramos el ID de la luz como etiqueta */}
      <div className="button-status">{isOn ? "Encendido" : "Apagado"}</div>
    </div>
  );
};

// Define las propiedades y tipos esperados para este componente
LightButton.propTypes = {
  id: PropTypes.string.isRequired, // El ID de la luz (por ejemplo: "luz1")
};

export default LightButton;
