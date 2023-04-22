import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";
const genere = JSON.parse(localStorage.getItem("userGenere"));
const gener1 = genere[0];
const gener2 = genere[2];
const gener3 = genere[3];

const Movies = () => {
  const [gener1Data, setGener1Data] = useState([]);
  const [gener2Data, setGener2Data] = useState([]);
  const [gener3Data, setGener3Data] = useState([]);
  useEffect(() => {
    const getGenre1Data = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${gener1}`
      )
        .then((response) => response.json())
        .then((response) => setGener1Data(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    const getGenre2Data = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${gener2}`
      )
        .then((response) => response.json())
        .then((response) => setGener2Data(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    const getGenre3Data = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${gener3}`
      )
        .then((response) => response.json())
        .then((response) => setGener3Data(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };

    getGenre1Data();
    getGenre2Data();
    getGenre3Data();
  }, []);

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
          <p>{gener1}</p>
          <div className="movies_container">
            {gener1Data?.map((item, id) => {
              return (
                <div key={id} className="images">
                  <img src={item.Poster} alt={item.Title} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="collection_container ">
          <p>{gener2}</p>
          <div className="movies_container">
            {gener2Data?.map((item, id) => {
              return (
                <div key={id} className="images">
                  <img src={item.Poster} alt={item.Title} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="collection_container ">
          <p>{gener3}</p>
          <div className="movies_container">
            {gener3Data?.map((item, id) => {
              return (
                <div key={id} className="images">
                  <img src={item.Poster} alt={item.Title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
