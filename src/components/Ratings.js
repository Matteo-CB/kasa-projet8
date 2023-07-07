import React from "react";

const Ratings = ({ ratings }) => {
  const maxRating = 5;

  const renderStar = (index) => {
    if (index < ratings) {
      return <img className="star"  src="../images/star-red-svgrepo-com.svg" alt="star" />;
    } else {
      return <img className="star" src="../images/star-grey-svgrepo-com.svg" alt="star" />;
    }
  };

  return (
    <div className="ratings">
      {[...Array(maxRating)].map((_, index) => (
        <span key={index}>{renderStar(index)}</span>
      ))}
    </div>
  );
};

export default Ratings;
