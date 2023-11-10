import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Hprivado from "./Hprivado";
import UseAuth from "../../helpers/UseAuth";

const LayoutPrivado = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      <div className="container-fluid">
        <Hprivado />
        <div className="row">{Autenticado.id ? <Outlet /> : <Navigate to="/Ingresar" />}</div>
      </div>
    </>
  );
};

export default LayoutPrivado;
