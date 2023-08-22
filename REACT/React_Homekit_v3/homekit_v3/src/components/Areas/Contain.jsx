import { Routes, Route } from "react-router-dom";
import Estudio from "./Estudio";
import Cocina from "./Cocina";
import Div from "../Actuadores/Div";

import "../../scss/components/Areas/Contain.scss";

function Contain() {
  return (
    <div className="Contain">
      <Div />
      <Div />
      <Div />
      <Div />
      <Routes>
        <Route path="/Estudio" element={<Estudio />} />
        <Route path="/Cocina" element={<Cocina />} />
      </Routes>
    </div>
  );
}

export default Contain;
