import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="layout__navbar">
        <header className="navbar__header">
          <NavLink to="/" className="navbar__title">
            ParceBook
          </NavLink>
        </header>

        <div className="navbar__container-lists">
          <ul className="container-lists__menu-list">
            <li className="menu-list__item">
              <NavLink to="/" className="menu-list__link">
                <i className="fa-solid fa-house"></i>
                <span className="menu-list__title">Inicio</span>
              </NavLink>
            </li>

            <li className="menu-list__item">
              <NavLink to="/Registro" className="menu-list__link">
                <i class="fa-solid fa-user-plus"></i>
                <span className="menu-list__title">Registrarse</span>
              </NavLink>
            </li>
            <li className="menu-list__item">
              <NavLink to="/Ingresar" className="menu-list__link">
                <i class="fa-solid fa-right-to-bracket"></i>
                <span className="menu-list__title">Ingresar</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
