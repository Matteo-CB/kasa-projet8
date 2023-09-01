import React from "react";
import Details from "./Details";
import Ratings from "./Ratings";

const Infos = ({ housingData }) => {
  const equipments =
    housingData &&
    housingData.equipments.map((e, index) => (
      <span key={index}>
        {e}
        <br />
      </span>
    ));
  const tags =
    housingData &&
    housingData.tags.map((e, index) => (
      <span className={`tags ${index === 2 ? "new-line" : ""}`} key={index}>
        {e}
      </span>
    ));
  const hostName = housingData && housingData.host.name;
  const [firstName, lastName] = hostName ? hostName.split(" ") : [null, null];

  return (
    <div className="infos">
      <div className="infos-header">
        <div>
          <h1 className="title-infos">{housingData && housingData.title}</h1>
          <p className="location">{housingData && housingData.location}</p>
          <div className="tags-container">{tags}</div>
        </div>
        <div className="profil">
          <div className="person">
            <p className="name">
              {hostName && firstName}
              <br />
              {hostName && lastName}
            </p>
            <img src={housingData && housingData.host.picture} alt="profil" />
          </div>
          <div className="ratings">
            <Ratings ratings={housingData && Number(housingData.rating)} />
          </div>
        </div>
      </div>
      <div className="details-container">
        <Details
          detailsData={{
            title: "Description",
            content: housingData && housingData.description,
            id: 5,
          }}
        />
        <Details
          detailsData={{
            title: "Équipements",
            content: housingData && equipments,
            id: 6,
          }}
        />
      </div>
    </div>
  );
};

export default Infos;
