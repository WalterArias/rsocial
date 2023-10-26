import React, { Component } from "react";

const Ingresar = () => {
  return (
    <>
      <div className="col">
        <div class="card text-start">
          <div class="card-body">
            <h4 class="card-title">Ingreso</h4>
            <form action="">
              <div className="mb-3">
                <label for="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                <small id="helpId" className="form-text text-muted">
                  Help text
                </small>
              </div>
              <button type="reset" className="btn btn-secondary m-2">
                Reset
              </button>
              <button type="submit" className="btn btn-primary m-2">
                Enviar
              </button>
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
