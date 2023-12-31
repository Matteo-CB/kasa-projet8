import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Details from "../components/Details";

const About = () => {
  return (
    <>
      
      <Header />
      <main className="about">
        <div className="about-header"></div>
        <div className="details-container">
          <Details
            detailsData={{
              title: `Fiabilité`,
              content: `Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.`,
              id: 1,
            }}
          />
          <Details
            detailsData={{
              title: `Respect`,
              content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.`,
              id: 2,
            }}
          />
          <Details
            detailsData={{
              title: `Service`,
              content: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.`,
              id: 3,
            }}
          />
          <Details
            detailsData={{
              title: `Sécurité`,
              content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien
          à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
          que les standards sont bien respectés. Nous organisons également
          des ateliers sur la sécurité domestique pour nos hôtes.`,
              id: 4,
            }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
