import React, { Component } from "react";

const Ingresar = () => {
  return (
    <>
      <div className="col">
        <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title ">Ingreso</h4>
            <form action="">
              <div className="mb-3">
                <label for="" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" name="" id="" placeholder="" />
              </div>
              <div className="mb-3">
                <label for="" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" name="" id="" placeholder="" />
              </div>
              <div class="d-flex justify-content-center p-3">
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
