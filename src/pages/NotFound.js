import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="not-found">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to={"/"}>Retourner sur la page d’accueil</NavLink>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
