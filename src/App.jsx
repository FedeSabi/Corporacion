
import Inicio from "./Components/Inicio.jsx";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Nosotros from './pages/Nosotros.jsx';
import Contactanos from "./pages/Contactanos.jsx";
import Reseña from "./pages/Reseña.jsx";
import GCTravelGroup from "./pages/GCTravelGroup.jsx";
import Corporativo from "./pages/Corporativo.jsx";
import JGCreativos from "./pages/JGCreativos.jsx";
import JogicralEcuador from "./pages/JogicralEcuador.jsx"
import Postulate from "./pages/Postulate.jsx"
import Proveedor from "./pages/Proveedor.jsx"
import Tecningenio from "./pages/Tecningenio.jsx";
import Error404 from "./Components/Error404.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Reseña" element={<Reseña/>} />
        <Route path="/Corporativo" element={<Corporativo/>} />
        <Route path="/JGCreativos" element={<JGCreativos/>} />
        <Route path="/JogicralEcuador" element={<JogicralEcuador/>} />
        <Route path="/Postulate" element={<Postulate/>} />
        <Route path="/GCTravelGroup" element={<GCTravelGroup/>} />
        <Route path="Proveedor" element={<Proveedor/>} />
        <Route path="/Tecningenio" element={<Tecningenio/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

