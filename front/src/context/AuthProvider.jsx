import React from "react";
import { useState, useEffect, createContext } from "react";
import { Global } from "../helpers/Global";

/**
 * Service provider para validar credenciales del localstorage vs credenciales
 * Crea un objeto o variable de contexto para usar en toda la aplicacion
 * Genera un estado = Autenticado
 * returns el authcontext.provider => proveedor de servicio de autenticacion
 */
//crea el contexto(supervariable, variable de session como las de PHP)
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [Autenticado, setAutenticado] = useState({});
  useEffect(() => {
    autenticarUsuario();
  }, []);

  /**
   * Compara que el token sea valido
   * @returns objeto serializado de la comparacion de localstorage vs api
   */
  const autenticarUsuario = async () => {
    //obtener datos del usuario logueado
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    // validamos que los datos existan en el localstorage
    if (!token || !user) {
      return false;
    }
    // si existen los transformamos en objeto javascript para manipular el ID del usuario
    const userObj = JSON.parse(user);
    const id = userObj.id;
    // Comprobacion del token del localstorage vs el del Backend

    const request = await fetch(Global.url + "perfil/listarUno/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await request.json();

    setAutenticado(data.user);
  };

  //=======================================================================================================
  return <AuthContext.Provider value={{ Autenticado, setAutenticado }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
