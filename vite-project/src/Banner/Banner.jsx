import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_div">
        <div className="login_content">
          <h3>Already have an account?</h3>
          <button className="login_btn">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
