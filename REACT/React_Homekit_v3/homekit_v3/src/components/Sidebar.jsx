import { useState } from "react";
import "../scss/components/Principales/Sidebar.scss";
import { Link } from "react-router-dom";
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
          {active && (
            <Link to="/" className="nav-item">
              <FaHome className="logo_icon" />
            </Link>
          )}
          {active && (
            <Link to="/" className="nav-item">
              <span className="logo_name">Inicio</span>
            </Link>
          )}
        </div>
      </div>
      <ul className="nav">
        {[
          { icon: <FaDesktop />, name: "Estudio", route: "/estudio" },
          { icon: <FaBed />, name: "Cocina", route: "/cocina" },
          { icon: <FaBath />, name: "Baño", route: "/baño" },
          { icon: <FaLightbulb />, name: "Alcoba", route: "/alcoba" },
          { icon: <FaEllipsisH />, name: "Patio", route: "/patio" },
        ].map((item) => (
          <Link key={item.name} to={item.route} className="nav-item">
            {item.icon}
            {active && <span className="link_name">{item.name}</span>}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
