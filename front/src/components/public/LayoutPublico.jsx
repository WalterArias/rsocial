import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import UseAuth from "../../helpers/UseAuth";

const LayoutPublico = () => {
  const { Autenticado } = UseAuth();
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row">{!Autenticado.id ? <Outlet /> : <Navigate to="/social" />}</div>
      </div>
    </>
  );
};

export default LayoutPublico;
