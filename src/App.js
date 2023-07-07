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
    const fetchData = async () => {
      try {
        const response = await axios.get("../data/logements.json");
        const sortedData = response.data.filter((element, index) =>
          [2, 3, 4, 5, 7, 8].includes(index + 1)
        );
        setData(sortedData);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données JSON :",
          error
        );
      }
    };

    fetchData();
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
