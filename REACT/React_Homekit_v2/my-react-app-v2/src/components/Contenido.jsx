import LightButton from "./LightButton";
import "../scss/components/Contenido.scss";
import WLEDControl from "./WLEDControl";
const Contenido = () => {
  return (
    <div className="contenido">
      <LightButton id="luz1" />
      <LightButton id="luz2" />
      <WLEDControl />
    </div>
  );
};

export default Contenido;
