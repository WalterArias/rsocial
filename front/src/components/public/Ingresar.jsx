import React, { Component, useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import { Global } from "../../helpers/Global";

import UseAuth from "../../helpers/UseAuth";
const Ingresar = () => {
  const { form, cambiar } = HelperForm({});
  const [guardado, setGuardado] = useState("no_enviado");
  const { setAutenticado } = UseAuth();
  //
  const loginUsuario = async (e) => {
    e.preventDefault();
    let usuarioLogin = form;
    //guardar en la api
    const request = await fetch(Global.url + "perfil/login", {
      method: "POST",
      body: JSON.stringify(usuarioLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();

    if (data.status == "ok") {
      // console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setGuardado("Guardado");
      setAutenticado(data.user);
      //redireccion
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setGuardado("Error");
    }
  };

  //render del componente
  return (
    <>
      <div className="col">
        <div className="card text-start">
          <div className="card-body">
            <h4 className="card-title ">Ingreso</h4>
            {guardado == "Guardado" ? (
              <div className="alert alert-primary" role="alert">
                Credenciales correctas
              </div>
            ) : (
              ""
            )}
            {guardado == "Error" ? (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>error en la insercion!</strong> ...
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            ) : (
              ""
            )}

            <form onSubmit={loginUsuario}>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" name="email" id="" placeholder="" onChange={cambiar} />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id=""
                  placeholder=""
                  onChange={cambiar}
                />
              </div>
              <div className="d-flex justify-content-center p-3">
                <button type="reset" className="btn btn-secondary m-2">
                  Reset
                </button>
                <button type="submit" className="btn btn-success m-2">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col">
        <img src="./images/people.jpg" className="img-fluid shadow-lg p-3 mb-5 bg-body rounded" alt="" sizes="" />
      </div>
    </>
  );
};

export default Ingresar;
