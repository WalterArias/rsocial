import React, { useEffect } from "react";
import UseAuth from "../../helpers/UseAuth";
import { useNavigate } from "react-router-dom";

/**
 * metodo  que hace el logout de la aplicacion
 *  limpia el localatorage, y el objeto que genra el hook usestate es inicializado
 * @author Pedrito Perez
 * @param null
 * @returns  void redirige a la pantalla de ingresar
 * @version 0.001
 */

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
