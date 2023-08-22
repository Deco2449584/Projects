//header.jsx
import "../scss/components/Header.scss";
import MotionSensor from "./indicadores/MotionSensor";

const Header = () => {
  return (
    <div className="header">
      <MotionSensor id="motion1" />
      <MotionSensor id="motion2" />
      <MotionSensor id="motion3" />
      <MotionSensor id="motion4" />
    </div>
  );
};
export default Header;
