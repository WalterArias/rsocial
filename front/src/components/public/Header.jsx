import React, { Component } from "react";

const Header = () => {
  return (
    <>
      <div className="row">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">
              ParceBook <i className="bi bi-person-hearts"></i>
            </span>
          </a>
          <ul className="nav nav-pills"></ul>
        </header>
      </div>
    </>
  );
};

export default Header;
