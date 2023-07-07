import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HousingPage from "./pages/HousingPage";
import About from "./pages/About";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("../data/logements.json")
      .then((response) => {
        // Traitez les données JSON ici
        const sortedData = response.data.filter((element, index) =>
          [2, 3, 4, 5, 7, 8].includes(index + 1)
        ); // en mettre 6 mais marche sans
        
        setData(sortedData);
      })
      .catch((error) => {
        // Gérez les erreurs ici
        console.error(
          "Erreur lors de la récupération des données JSON :",
          error
        );
      });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/logement/:id" element={<HousingPage data={data} />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
