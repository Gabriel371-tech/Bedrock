import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SobreSistema from "./components/sections/SobreSistema";
import './index.css';
import Login from "./pages/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Path = / ‚ o caminho da raiz, o main vai iniciar os components no element */}
        <Route  path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <SobreSistema />
            </>
          }
        />

        {/*Rota da P gina de login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  
  );
};

export default App
