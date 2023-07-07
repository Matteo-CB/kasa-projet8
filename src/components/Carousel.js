import React, { useState } from 'react';

const Carousel = ({housingData}) => {
    const [pictures, setPictures] = useState(0);

    const decreasePictures = () => {
      if (pictures === 0) {
        setPictures(Number(housingData.pictures.length) - 1);
      } else {
        setPictures(pictures - 1);
      }
    };
  
    const increasePictures = () => {
      if (pictures === housingData.pictures.length - 1) {
        setPictures(0);
      } else {
        setPictures(pictures + 1);
      }
    };
    return (
        <>
            {housingData && (
          <div
            className="carousel"
            style={{
              background: `url(${housingData.pictures[pictures]}) center/cover`,
            }}
          >
            <img
              width={50}
              className="arrow left"
              src="../images/arrow-left-335-svgrepo-com.svg"
              alt="arrow"
              onClick={decreasePictures}
            />
            <img
              width={50}
              className="arrow right"
              src="../images/arrow-right-336-svgrepo-com.svg"
              alt="arrow"
              onClick={increasePictures}
            />
          </div>
        )}
        </>
    );
};

export default Carousel;