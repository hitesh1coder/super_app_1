import React, { useState } from "react";
import Select from "react-select";
import "./Category.css";
import { categories } from "./CategoriesData.jsx";
import Cards from "./Cards";
let values = ["action", "horror", "music", "drama", "romance"];
const Category = () => {
  return (
    <div className="category_main">
      <div className="category_leftcontent">
        <h3>Super app</h3>
        <h1>Choose your entertainment category</h1>
        <div className="selected_categories">
          <div className="selected_gener">
            {values.map((value) => {
              return (
                <p>
                  {value}
                  <span>
                    <img src="/images/close.png" alt="+" />
                  </span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="cards">
          {categories.map((elem, i) => {
            return (
              <Cards
                key={i}
                index={elem.value}
                name={elem.name}
                background={elem.background}
                image={elem.image}
              />
            );
          })}
        </div>
        <button className="next_btn">Next Page</button>
      </div>
    </div>
  );
};

export default Category;
