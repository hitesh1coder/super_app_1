import React from "react";
import { Link } from "react-router-dom";
import "./Entertainment.css";

const Entertainment = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e3c99cd832mshe23f39dd3d352e7p16d7c3jsnea78a275fea5",
      "X-RapidAPI-Host": "unogsng.p.rapidapi.com",
    },
  };

  fetch("https://unogsng.p.rapidapi.com/action", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <div className="entertainment_container">
      <div className="user">
        <h3>Super app</h3>
        <Link to="/home">
          <img src="/images/userIcon.png" alt="user" />
        </Link>
      </div>
      <div className="category_container">
        <h4>Entertainment according to your choice</h4>
        <div className="collection_container ">
          <p>Action</p>
          <div className="movies_container">
            <img src="/images/romance.png" alt="movies" />
            <img src="/images/action.png" alt="movies" />
            <img src="/images/romance.png" alt="movies" />
            <img src="/images/romance.png" alt="movies" />
          </div>
        </div>
        <div className="collection_container ">
          <p>Action</p>
          <div className="movies_container">
            <img src="/images/romance.png" alt="movies" />
            <img src="/images/action.png" alt="movies" />
            <img src="/images/romance.png" alt="movies" />
            <img src="/images/drama.png" alt="movies" />
          </div>
        </div>
        <div className="collection_container ">
          <p>Action</p>
          <div className="movies_container">
            <img src="/images/drama.png" alt="movies" />
            <img src="/images/action.png" alt="movies" />
            <img src="/images/drama.png" alt="movies" />
            <img src="/images/drama.png" alt="movies" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
