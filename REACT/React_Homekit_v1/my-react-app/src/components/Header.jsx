import "./Style/Header.scss";
import {
  FaTemperatureHigh,
  FaWater,
  FaLightbulb,
  FaWalking,
} from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">
      <div className="sensor-item"></div>
      <div className="sensor-item">
        <FaWalking size={24} />
        <span>Presencia: Detectada</span>
      </div>

      <div className="sensor-item">
        <FaTemperatureHigh size={24} />
        <span>Temperatura: 25°C</span>
      </div>

      <div className="sensor-item">
        <FaWater size={24} />
        <span>Humedad: 40%</span>
      </div>

      <div className="sensor-item">
        <FaLightbulb size={24} />
        <span>Luces ON: 5</span>
      </div>

      <div className="sensor-item">
        <FaLightbulb size={24} />
        <span>Luces OFF: 3</span>
      </div>

      <div className="sensor-item"></div>
    </div>
  );
}
