import Sidebar from "./components/Sidebar";
import Contenido from "./components/Contenido";
import "./App.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex", // Cambio a flex para una estructura lateral
        height: "100vh",
        backgroundImage:
          "linear-gradient(90deg, rgba(142,139,61,1) 23%, rgba(248,253,29,0.7652310924369747) 57%, rgba(252,219,69,1) 84%)",
        overflow: "hidden", // Para evitar scroll no deseado
      }}
    >
      <Sidebar />
      <Contenido />
    </div>
  );
};

export default App;
