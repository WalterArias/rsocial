import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LayoutPublico from "../components/public/LayoutPublico";
import Inicio from "../components/public/Inicio";
import Error from "../components/general/Error";
import Registrarse from "../components/public/Registrarse";
import Ingresar from "../components/public/Ingresar";
import DashBoard from "../components/private/DashBoard";
import LayoutPrivado from "../components/private/LayoutPrivado";
import MiPerfil from "../components/private/MiPerfil";

const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <Routes>
        {/*rutas publicas */}
        <Route path="/" element={<LayoutPublico />}>
          <Route index element={<Inicio />} />
          <Route path="/Registro" element={<Registrarse />} />
          <Route path="/Ingresar" element={<Ingresar />} />
        </Route>
        {/*rutas privadas */}
        <Route path="/social/" element={<LayoutPrivado />}>
          <Route index element={<DashBoard />} />
          <Route path="Perfil" element={<MiPerfil />} />
          {/* <Route path="/Ingresar" element={<Ingresar />} /> */}
        </Route>

        {/*en caso de error */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
