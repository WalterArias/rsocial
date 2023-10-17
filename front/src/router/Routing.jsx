import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Inicio from "../components/layout/paginas/Inicio";
import Acerca from "../components/layout/paginas/Acerca";
import Contacto from "../components/layout/paginas/Contacto";
import Error from "../components/layout/paginas/Error";

const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Acerca" element={<Acerca />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
