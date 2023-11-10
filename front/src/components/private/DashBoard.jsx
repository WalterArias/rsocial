import React, { Component } from "react";
import UseAuth from "../../helpers/UseAuth";
const DashBoard = () => {
  const { Autenticado } = UseAuth();

  return (
    <>
      <div className="col-8">
        <div className="card">
          <div className="card-header text-bg-primary bg-gradient">Publicaciones</div>

          <div className="card-body">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Juan dice</h4>
                <p class="card-text">dcs</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Pedro Dice</h4>
                <p class="card-text">gaggdgasgjh</p>
              </div>
            </div>
          </div>
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
            <div className="card mt-3">
              <div className="card-body">
                <h4 className="card-title">¿ Qué estás pensando hoy ?</h4>
                <form action="">
                  <div className="mb-3">
                    <textarea className="form-control" name="" id="" rows="3"></textarea>
                  </div>
                  <label htmlFor="">Sube tu foto:</label>
                  <input type="file" name="" id="" className="form-control" />
                  <button type="submit" className="btn btn-primary mt-1 ">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
