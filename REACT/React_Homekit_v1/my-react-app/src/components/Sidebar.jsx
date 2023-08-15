import { useState } from "react";
import "../scss/components/_sidebar.scss";
import {
  FaHome,
  FaDesktop,
  FaBed,
  FaBath,
  FaLightbulb,
  FaEllipsisH,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`sidebar ${active ? "active" : ""}`}>
      <div className="logo_content">
        <button onClick={() => setActive(!active)} aria-label="Toggle Sidebar">
          <FaBars className="menu_icon" />
        </button>
        <div className="logo">
          {active && <FaHome className="logo_icon" />}
          {active && <span className="logo_name">Home</span>}
        </div>
      </div>
      <ul className="nav">
        {[
          { icon: <FaDesktop />, name: "Estudio" },
          { icon: <FaBed />, name: "Habitación" },
          { icon: <FaBath />, name: "Baño" },
          { icon: <FaLightbulb />, name: "Iluminación" },
          { icon: <FaEllipsisH />, name: "Otros" },
        ].map((item) => (
          <li key={item.name}>
            {item.icon}
            {active && <span className="link_name">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
