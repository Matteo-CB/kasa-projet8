import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const logoSrc =
    location.pathname === "/logement/0" || "/logement/1" || "/logement/2" || "/logement/3" || "/logement/4" || "/logement/5"
      ? "../images/logo.svg"
      : "./images/logo.svg";

  return (
    <header>
      <NavLink to={"/"}>
        <img src={logoSrc} alt="logo" />
      </NavLink>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li className={location.pathname === "/" ? "selected" : ""}>
              Accueil
            </li>
          </NavLink>
          <NavLink to={"/a-propos"}>
            <li className={location.pathname === "/a-propos" ? "selected" : ""}>
              A Propos
            </li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
