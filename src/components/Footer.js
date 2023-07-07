import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const logoSrc =
    location.pathname === "/logement/0" ||
    "/logement/1" ||
    "/logement/2" ||
    "/logement/3" ||
    "/logement/4" ||
    "/logement/5"
      ? "../images/LOGO.png"
      : "./images/LOGO.png";
  return (
    <footer>
      <img src={logoSrc} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
