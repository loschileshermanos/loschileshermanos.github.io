import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logochileshermanos130px.png";
function LogoHeader() {
  return <img src={logoHeader} alt="Logo" width={50} />;
}
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <LogoHeader className="logo" />
            <p className="logo-content-left__text">Los Chiles Hermanos</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span>Inicio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/precios">
                  <span>Precio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro">
                  <span>Registro</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/tiendas">
                  <span className="nav-title-link">Tiendas</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
