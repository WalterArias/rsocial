import React, { Component } from "react";

const Registrarse = () => {
  return (
    <>
      <div className="col">
        <div className="col">
          <div class="card text-start">
            <div class="card-body">
              <h4 class="card-title p-2">Formulario de registro</h4>
              <form action="">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Tu nombre Completo ..."
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Tu apodo ..."
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="tu email ..."
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Ingresa la clave que usaras! ... no la dejes ver de nadie   ...!"
                  />
                </div>
                <div class="d-flex justify-content-center p-3">
                  <button type="reset" className="btn btn-secondary m-2">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-primary m-2">
                    <i class="bi bi-chat-heart-fill"> Enviar</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <img src="./images/people.jpg" className="img-fluid shadow-lg p-3 mb-5 bg-body rounded" alt="" sizes="" />
      </div>
    </>
  );
};

export default Registrarse;
