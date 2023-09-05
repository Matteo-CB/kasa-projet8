import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Infos from "../components/Infos";
import NotFound from "./NotFound";

const HousingPage = ({ data }) => {
  const { id } = useParams();
  const housingData = data && data[Number(id)];
  return (
    <div>
      {data.length - 1 >= id ? (
        <>
          <Header />
          <main className="housing-page">
            <Carousel housingData={housingData && housingData} />
            <Infos housingData={housingData && housingData} />
          </main>
          <Footer />{" "}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default HousingPage;
