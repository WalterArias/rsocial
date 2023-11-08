import React, { Component } from "react";
const DashBoard = () => {
  return (
    <>
      <div className="col-2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Menu</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
      <div className="col-8">
        {" "}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Publicaciones</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
      <div className="col-2">
        {" "}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Publicar</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
