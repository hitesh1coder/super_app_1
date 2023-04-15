import React from "react";
import "./Home.css";
import UserInfo from "../HomeSection/UserCard/UserInfo";
import Weather from "../HomeSection/Weather/Weather";
import News from "../HomeSection/News/News";

const Home = () => {
  return (
    <div className="home_main">
      <div className="home_left">
        <UserInfo />
        <Weather />
      </div>
      <div className="home_right">
        <News />
      </div>
    </div>
  );
};

export default Home;
