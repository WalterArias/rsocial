import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import UseAuth from "../../helpers/UseAuth";
import Publicacion from "./Publicacion";
const DashBoard = () => {
  const { Autenticado } = UseAuth();
  const [publicaciones, setPublicaciones] = useState([]);
  const [perfiles, setPerfiles] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    obtenerPublicaciones();
    obtenerPerfiles();
  }, []);

  const obtenerPublicaciones = async (nextPage = 1) => {
    const request = await fetch(Global.url + "publicacion/listarTodas/" + nextPage, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await request.json();
    if (data.status === "ok") {
      setPublicaciones(data.publicaciones);
    }
    console.log(publicaciones);
  };
  const obtenerPerfiles = async () => {
    const perfil = await fetch(Global.url + "/perfil/listarUno/" + publicaciones[0].usuario, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    const datos = await perfil.json();
    setPerfiles(datos.user);
  };
  const NextPage = () => {
    let next = page + 1;
    setPage(next);
    obtenerPublicaciones(next);
  };
  return (
    <>
      <div className="col-8">
        <div className="card">
          <div className="card-header text-bg-primary bg-gradient">Publicaciones</div>

          <div className="card-body">
            {publicaciones.map((publicacion) => {
              return (
                <>
                  <div className="card m-2" key={publicacion._id}>
                    <div className="card-body mt-1">
                      <span className="card-title fw-light">{perfiles.apodo} dice :</span>
                      <p className="card-text p-2">{publicacion.texto}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <button type="button" className="btn btn-success w-25 mx-auto" onClick={NextPage}>
            Ver Mas..
          </button>
          <br />
        </div>
        <div className="col-4"></div>
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
            <Publicacion />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
