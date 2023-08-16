import "../scss/components/Header.scss";
import MotionSensor from "./indicadores/MotionSensor";

export default function Header() {
  return (
    <div className="header">
      <MotionSensor id="motion1" />
      <MotionSensor id="motion2" />
    </div>
  );
}
