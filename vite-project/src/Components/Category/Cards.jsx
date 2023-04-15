import React, { useState } from "react";
import "./Category.css";

const Cards = ({ name, background, image }) => {
  const [select, setSelect] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const handleSelect = (elem) => {
    console.log(elem.currentTarget.getAttribute("data-defaultvalue"));
    setSelect(elem.currentTarget.getAttribute("data-defaultvalue"));
    setIsSelected(true);
    console.log(select);
  };
  return (
    <>
      <div
        className={isSelected ? `categories_item selected` : `categories_item`}
        style={{ background: `${background}` }}
        onClick={handleSelect}
        data-defaultvalue={name}
      >
        <h2>{name}</h2>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default Cards;
