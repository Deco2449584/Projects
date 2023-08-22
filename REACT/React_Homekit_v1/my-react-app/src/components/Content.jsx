import LightButton from "./LightButton";
import "../scss/components/Content.scss";
import WLEDControl from "./WLEDControl";
const Content = () => {
  return (
    <div className="contenido">
      <LightButton id="luz1" />
      <LightButton id="luz2" />
      <WLEDControl />
    </div>
  );
};

export default Content;
