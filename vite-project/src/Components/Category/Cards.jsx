import React, { useState } from "react";
import "./Category.css";

const Cards = ({ name, background, image, handleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleIsSelected = () => {
    setIsSelected(true);
  };

  return (
    <>
      <div onClick={handleIsSelected} className={isSelected ? `selected` : ``}>
        <div
          className="categories_item"
          style={{ background: `${background}` }}
          onClick={() => handleSelect(name)}
        >
          <h2>{name}</h2>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Cards;
