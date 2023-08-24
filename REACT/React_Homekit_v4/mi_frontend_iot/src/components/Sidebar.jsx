import { useState } from "react";
import "./scss/Sidebar.scss";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCouch,
  FaUtensils,
  FaBath,
  FaBed,
  FaDesktop,
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
          { icon: <FaCouch />, name: "Sala", route: "/sala" },
          { icon: <FaUtensils />, name: "Cocina ", route: "/cocina" },
          { icon: <FaBed />, name: "Alcoba ", route: "/alcoba" },
          { icon: <FaDesktop />, name: "Estudio", route: "/estudio" },
          { icon: <FaBath />, name: "Alcoba 2", route: "/alcoba2" },
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
