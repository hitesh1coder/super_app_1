import React from "react";
import "./News.css";
const News = () => {
  const today = new Date();

  const showTime = today.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  return (
    <div className="news_main">
      <div className="news_section">
        <div className="news_heading">
          <div className="news_des">
            <h1>Want to climb Mount Everest?</h1>
            <p>
              {date} | {showTime}
            </p>
          </div>
        </div>
        <div className="news_details">
          <p>
            In the years since human beings first reached the summit of Mount
            Everest in 1953, climbing the world’s highest mountain has changed
            dramatically. Today, hundreds of mountaineers manage the feat each
            year thanks to improvements in knowledge, technology, and the
            significant infrastructure provided by commercially guided
            expeditions that provide a veritable highway up the mountain for
            those willing to accept both the......
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
