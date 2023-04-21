import React, { useEffect, useState } from "react";
import audioTune from "./call-to-attention-123107.mp3";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

const Timer = () => {
  const [inputHour, setInputHour] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [timerIsStart, setTimerIsStart] = useState(false);
  const [time, setTime] = useState(0);

  const playsound = () => {
    new Audio(audioTune).play();
  };
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setInputMinutes(0);
      setInputHour(0);
      setInputSeconds(0);
      playsound();
    }
  }, [time]);

  const totalInputTimeInSeconds =
    inputHour * 60 * 60 + inputMinutes * 60 + inputSeconds;

  const startTimer = () => {
    setTime(totalInputTimeInSeconds);
    setTimerIsStart(true);
  };
  const showTimer = (totalTimeInSeconds) => {
    const hour = Math.floor(totalTimeInSeconds / 3600);
    totalTimeInSeconds %= 3600;
    const min = Math.floor(totalTimeInSeconds / 60);
    const sec = totalTimeInSeconds % 60;
    return `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${
      sec < 10 ? "0" + sec : sec
    }`;
  };

  const increseHour = () => {
    if (inputHour < 12) setInputHour(inputHour + 1);
  };
  const increseMinute = () => {
    if (inputMinutes < 59) {
      setInputMinutes(inputMinutes + 1);
    } else {
      setInputMinutes(0);
      setInputHour(inputHour + 1);
    }
  };
  const increseSeconds = () => {
    if (inputSeconds < 59) {
      setInputSeconds(inputSeconds + 1);
    } else {
      setInputSeconds(0);
      setInputMinutes(inputMinutes + 1);
    }
    if (inputMinutes > 59) {
      setInputMinutes(0);
      setInputHour(inputHour + 1);
    }
  };
  const decreaseHour = () => {
    if (inputHour > 0) setInputHour(inputHour - 1);
  };
  const decreaseMinute = () => {
    if (inputMinutes > 0) {
      setInputMinutes(inputMinutes - 1);
    } else {
      if (inputHour > 0) {
        setInputMinutes(59);
        setInputHour(inputHour - 1);
      } else {
        setInputHour(0);
      }
    }
  };
  const decreaseSeconds = () => {
    if (inputSeconds > 0) {
      setInputSeconds(inputSeconds - 1);
    } else {
      if (inputMinutes > 0) {
        setInputSeconds(59);
        setInputMinutes(inputMinutes - 1);
      } else {
        setInputMinutes(0);
      }
      if (inputHour > 0) {
        setInputMinutes(59);
        setInputSeconds(59);
        setInputHour(0);
      }
    }
  };

  return (
    <div className="timer_main">
      <div className="timer">
        <div className="timer_container">
          {/* <div
            className="outer_cirle"
            style={{
              background: `conic-gradient(
                #FF6A6A ${progress}%, transparent ${progress}%)`,
            }}
          >
            <div className="inner_circle">
              <div className="clock_container">
                <p>{showTimer(time)}</p>
              </div>
            </div>
          </div> */}
          <CountdownCircleTimer
            isPlaying={timerIsStart ? true : false}
            rotation="counterclockwise"
            duration={totalInputTimeInSeconds}
            colors={["#FF6A6A", "transparent"]}
          >
            {({ remainingTime }) => <p> {showTimer(time)}</p>}
          </CountdownCircleTimer>
        </div>
      </div>
      <div className="set_timer">
        <div className="time">
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
        </div>
        <div className={timerIsStart ? "increse_btn disable" : "increse_btn"}>
          <img onClick={increseHour} src="/images/increse.png" alt="" />

          <img onClick={increseMinute} src="/images/increse.png" alt="" />

          <img onClick={increseSeconds} src="/images/increse.png" alt="" />
        </div>
        <div className="timer_number">
          <h2>{inputHour}</h2> :<h2>{inputMinutes}</h2> :<h2>{inputSeconds}</h2>
        </div>
        <div className={timerIsStart ? "decrese_btn disable" : "decrese_btn"}>
          <img onClick={decreaseHour} src="/images/decrease.png" alt="" />

          <img onClick={decreaseMinute} src="/images/decrease.png" alt="" />

          <img onClick={decreaseSeconds} src="/images/decrease.png" alt="" />
        </div>

        <button onClick={startTimer} className="start_btn">
          Start
        </button>
      </div>
    </div>
  );
};

export default Timer;
