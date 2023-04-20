import React from "react";
import "./Entertainment.css";

const Entertainment = () => {
  return (
    <div className="entertainment_container">
      <div className="user">
        <h3>Super app</h3>
        <img src="" alt="user" />
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
