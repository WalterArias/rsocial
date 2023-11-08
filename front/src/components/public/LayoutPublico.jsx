import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const LayoutPublico = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutPublico;
