import React, { useState } from "react";
import HelperForm from "../../helpers/HelperForm";
import UseAuth from "../../helpers/UseAuth";
import { Global } from "../../helpers/Global";

const Publicacion = () => {
  const { Autenticado } = UseAuth();
  const { form, cambiar } = HelperForm({});
  const [guardado, setGuardado] = useState("no_enviado");
  //=============
  const guardarPublicacion = async (e) => {
    e.preventDefault();
    //data del form,
    let nuevaPublicacion = form;
    nuevaPublicacion.usuario = Autenticado.id;

    //request de guardado

    const request = await fetch(Global.url + "publicacion/crear", {
      method: "POST",
      body: JSON.stringify(nuevaPublicacion),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await request.json();

    //mensajeria
    if (data.status == "ok") {
      setGuardado("Guardado");
    } else {
      setGuardado("error");
    }
  };
  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          {guardado == "Guardado" ? (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Insertado con exito !</strong> ...
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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
          <h4 className="card-title">¿ Qué estás pensando hoy ?</h4>
          <form onSubmit={guardarPublicacion}>
            <div className="mb-3">
              <textarea className="form-control" name="texto" id="" rows="3" onChange={cambiar}></textarea>
            </div>
            <label htmlFor="">Sube tu foto:</label>
            <input type="file" name="file0" id="file" className="form-control" />
            <button type="submit" className="btn btn-primary mt-1 ">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Publicacion;
