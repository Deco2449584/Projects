import LightButton from "./LightButton";
import "../scss/components/Contenido.scss";
import WLEDControl from "./WLEDControl";
const Contenido = () => {
  return (
    <div className="contenido">
      <LightButton />
      <WLEDControl />
    </div>
  );
};

export default Contenido;
