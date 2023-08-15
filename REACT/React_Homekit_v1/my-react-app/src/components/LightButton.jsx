import { useState } from "react";
import { MdHighlight } from "react-icons/md"; // Importando el ícono desde react-icons
import "../scss/components/LightButton.scss";

const LightButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`light-button ${isOn ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="button-icon">
        <MdHighlight /> {/* Usando el ícono de react-icons */}
      </div>
      <div className="button-label">Luz</div>
      <div className="button-status">{isOn ? "Encendido" : "Apagado"}</div>
    </div>
  );
};

export default LightButton;
