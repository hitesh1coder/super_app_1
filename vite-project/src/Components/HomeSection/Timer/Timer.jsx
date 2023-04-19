import React, { useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const increseHour = () => {
    if (hour < 12) setHour(hour + 1);
  };
  const increseMinute = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    } else {
      setMinutes(0);
      setHour(hour + 1);
    }
  };
  const increseSeconds = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
  };
  const decrease = () => {
    if (hour > 0) setHour(hour - 1);
  };
  return (
    <div className="timer_main">
      <div className="timer"></div>
      <div className="set_timer">
        <div className="time">
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
        <div className="increse_btn">
          <img onClick={increseHour} src="/images/increse.png" alt="" />

          <img onClick={increseMinute} src="/images/increse.png" alt="" />

          <img onClick={increseSeconds} src="/images/increse.png" alt="" />
        </div>
        <div className="timer_number">
          <h2>{hour}</h2> :<h2>{minutes}</h2> :<h2>{seconds}</h2>
        </div>
        <div className="decrese_btn">
          <img onClick={decrease} src="/images/decrease.png" alt="" />

          <img onClick={decrease} src="/images/decrease.png" alt="" />

          <img onClick={decrease} src="/images/decrease.png" alt="" />
        </div>

        <button className="start_btn">Start</button>
      </div>
    </div>
  );
};

export default Timer;
