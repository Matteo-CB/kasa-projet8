import React from "react";
import { NavLink } from "react-router-dom";

const HousingContainer = ({ data }) => {
  return (
    <div className="housing-container">
      {data.map((e, index) => (
        <NavLink to={`/logement/${index}`} key={e.id}>
          <div
            style={{
              background: `linear-gradient(225deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${e.cover}) center/cover`,
            }}
            className="card"
          >
            <p>{e.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HousingContainer;
