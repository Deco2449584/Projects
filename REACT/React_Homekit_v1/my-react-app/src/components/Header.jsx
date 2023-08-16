import "../scss/components/Header.scss";
import MotionSensor from "./indicadores/MotionSensor";

export default function Header() {
  return (
    <div className="header">
      <MotionSensor />
    </div>
  );
}
