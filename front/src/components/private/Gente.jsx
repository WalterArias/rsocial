import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import UseAuth from "../../helpers/UseAuth";

const Gente = () => {
  const { Autenticado } = UseAuth();
  const [perfiles, setPerfiles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    obtenerPerfiles();
  }, []);
  const obtenerPerfiles = async (nextPage = 1) => {
    const perfil = await fetch(Global.url + "perfil/listar/" + nextPage, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const datos = await perfil.json();
    if (datos.status === "ok") {
      setPerfiles(datos.perfiles);
    }
  };
  const NextPage = () => {
    let next = page + 1;
    setPage(next);
    obtenerPerfiles(next);
  };
  //render del componente
  return (
    <>
      <div className="col-8">
        <div className="card">
          <div className="card-header text-bg-primary bg-gradient"> Gente de la red </div>

          <div className="card-body">
            {perfiles.map((perfil) => {
              return (
                <div className="card" key={perfil._id}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">foto</div>
                      <div className="col-6">
                        <strong>Nombre: </strong>
                        {perfil.nombre}
                        <br />
                        <strong>Mi apodo: </strong>
                        {perfil.apodo}
                        <br />
                        <strong>Email: </strong>
                        {perfil.email}
                      </div>
                      <div className="col-4">
                        <button type="button" class="btn btn-outline-success btn-sm m-1" onClick={"sie"}>
                          Seguir
                        </button>
                        <button type="button" class="btn btn-outline-danger btn-sm m-1" onClick={"sie"}>
                          No seguir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button type="button" className="btn btn-success w-25 mx-auto" onClick={NextPage}>
            Ver Mas..
          </button>
          <br />
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <div className="card mt-3">
              <div className="card-body">
                <img src="../../images/user.png" className="img-fluid rounded-top" alt="" />
                <h4 className="card-title">Usuario Activo: {Autenticado.nombre}</h4>
                {/*      <p class="card-text">Text</p> */}
                <span className="badge bg-success m-1 p-2">Siguiendo : 4</span>
                <span className="badge bg-info m-1 p-2">Seguidores : 10</span>
                <span className="badge bg-secondary m-1 p-2">Publicaciones :100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gente;
