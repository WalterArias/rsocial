import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const Hprivado = () => {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4"> ::: ParceBook :::</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item btn btn-light">
            <NavLink to="/social">Inicio</NavLink>
          </li>
          <li className="nav-item btn btn-light">
            <NavLink to="Perfil">Perfil</NavLink>
          </li>
          <li className="nav-item btn btn-light">
            <NavLink to="/">otro</NavLink>
          </li>
          <li className="nav-item" class="btn btn-light">
            <NavLink to="Logout">Salir</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Hprivado;
