import "./components/scss/App.scss";
import Fondo from "./components/Fondo";
import Sidebar from "./components/Sidebar";
import Contain from "./components/Contain";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import useDevice from "./services/useDevices";

function App() {
  const { deviceData, sendMessage } = useDevice();

  return (
    <div className="container">
      <BrowserRouter>
        <Fondo />
        <Header deviceData={deviceData} />
        <Sidebar />
        <Contain deviceData={deviceData} sendMessage={sendMessage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
