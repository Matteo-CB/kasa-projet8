import React from "react";
import Header from "../components/Header";
import HousingContainer from "../components/HousingContainer";
import Footer from "../components/Footer";

const Home = ({ data }) => {
  return (
    <>
      <Header />
      <main className="home">
        <div className="home-header">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <HousingContainer data={data} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
