import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Icones from "./components/sections/Icones";
import SobreSistema from "./components/sections/SobreSistema";
import Escalavel from "./components/sections/Escalavel";
import Agenda from "./components/sections/Agenda";
import Hero2 from "./components/sections/Hero2";
import "./index.css";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ContainerCollapse from "./components/sections/ContainerCollapse";
import CadastrarNomeScreen from "./pages/CadastrarNomeScreen";
import CadastrarEmailScreen from "./pages/CadastrarEmailScreen";
import CadastrarSenhaScreen from "./pages/CadastrarSenhaScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <SobreSistema />
              <Icones />
              <Escalavel />
              <Hero2 />
              <Agenda />
              <ContainerCollapse />
              <Footer />
            </>
          }
        />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Etapas de cadastro */}
        <Route path="/CadastrarNomeScreen" element={<CadastrarNomeScreen />} />
        <Route path="/CadastrarEmailScreen" element={<CadastrarEmailScreen />} />
        <Route path="/CadastrarSenhaScreen" element={<CadastrarSenhaScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
