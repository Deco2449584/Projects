import "../scss/Home.scss";
import Fondo from "../components/Fondo";
import Sidebar from "../components/Sidebar";
function Home() {
  return (
    <div className="container">
      <Fondo />
      <Sidebar />
    </div>
  );
}

export default Home;
