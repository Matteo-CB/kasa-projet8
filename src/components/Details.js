import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = ({ detailsData }) => {
  const location = useLocation();
  const arrowSrc =
    location.pathname === "/logement/0" ||
    "/logement/1" ||
    "/logement/2" ||
    "/logement/3" ||
    "/logement/4" ||
    "/logement/5"
      ? "../images/arrow-down-bold-svgrepo-com.svg"
      : "./images/arrow-down-bold-svgrepo-com.svg";

  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleArrowRef = (ref) => {
    arrowRef.current = ref;
  };

  const arrowStyle = {
    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
  };

  return (
    <div className="details">
      <div className="details-title" onClick={handleToggle}>
        {detailsData.title}{" "}
        <img
          width={25}
          ref={handleArrowRef}
          className={isOpen ? "open" : "close"}
          src={arrowSrc}
          alt="arrow"
          style={arrowStyle}
        />
      </div>

      <p className={isOpen ? "down content" : "content up"}>
        {detailsData.content}
      </p>
    </div>
  );
};

export default Details;
