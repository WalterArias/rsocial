import React, { useEffect } from "react";
import UseAuth from "../../helpers/UseAuth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setAutenticado } = UseAuth();
  const Navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setAutenticado({});
    Navigate("/Ingresar");
  });

  return (
    <>
      <h1>Cerrando sesion .....</h1>
    </>
  );
};

export default Logout;
