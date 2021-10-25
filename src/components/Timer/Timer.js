import React, { useRef, useState, useEffect } from "react";
import "./timer.css";

export default function Timer() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Dec 29 2021 20:05:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);

    }
  });
  return (
    <div className="Timer">
      <h2>Inscrições encerradas em:</h2>

      <div className="cardsTime">
        <div className="coverTime">
          <div className="time">{timerDays}</div> <div className="nameTime">dias</div>
        </div>
        <div className="coverTime">
          <div className="time">{timerHours}</div> <div className="nameTime">horas</div>
        </div>
        <div className="coverTime">
          <div className="time">{timerMinutes}</div>{" "}
          <div className="nameTime">minutos</div>
        </div>
        <div className="coverTime">
          <div className="time">{timerSeconds}</div>{" "}
          <div className="nameTime">segundos</div>
        </div>
      </div>

      <button>
        <a href="#">Aprender agora</a>
      </button>
    </div>
  );
}
