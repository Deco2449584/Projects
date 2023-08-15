import Sidebar from "./components/Sidebar";
import Contenido from "./components/Contenido";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/App.scss";

const App = () => {
  return (
    <div className="contenedor">
      <Header />
      <Sidebar />
      <Contenido />
      <Footer />
    </div>
  );
};

export default App;
