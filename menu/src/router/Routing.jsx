import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Clientes from "../components/Clientes";
import Productos from "../components/Productos";
import Error from "../interfaz/Error";
import Barra from "../interfaz/Barra";
import Menu from "../interfaz/Menu";
import MenuLateral from "../interfaz/MenuLateral";

const Routing = () => {
  //Creacion del sistema de rutas
  return (
    <BrowserRouter>
      <Barra />
      <Menu />
      <MenuLateral />
      <Routes>
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
