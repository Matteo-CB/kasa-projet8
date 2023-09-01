import React, { useState } from "react";

const Details = ({ detailsData }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  
  const checkHandler = () => {
    setIsChecked(!isChecked);
    
  };

  
  return (
    <div className="details">
      <input
        type="checkbox"
        className="check"
        id={detailsData.id}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label
        className={isChecked ? "details-title" : "details-title chevron2"}
        htmlFor={detailsData.id}
      >
        {detailsData.title}
      </label>
      <div
        id={"content" + detailsData.id}
        className={
          isChecked ? "content checkedDetails" : "content uncheckedDetails"
        }
      >
        {detailsData.content}
      </div>
    </div>
  );
};

export default Details;
