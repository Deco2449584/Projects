import "../scss/pages/Home.scss";
import Fondo from "../components/Fondo";
import Sidebar from "../components/Sidebar";
import Contain from "../components/Areas/Contain";
import { BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <BrowserRouter>
        <Fondo />
        <Sidebar />
        <Contain />
      </BrowserRouter>
    </div>
  );
}

export default Home;
