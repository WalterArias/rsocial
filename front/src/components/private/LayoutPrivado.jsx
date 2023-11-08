import React from "react";
import { Outlet } from "react-router-dom";
import Hprivado from "./Hprivado";

const LayoutPrivado = () => {
  return (
    <>
      <div className="container-fluid">
        <Hprivado />
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutPrivado;
