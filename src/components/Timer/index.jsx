import React, { useEffect, useState } from "react";
import Button from "../Button";
import TimeUnity from "./TimeUnity";

const Timer = ({ activeTask }) => {
  const [firstTime, setFirstTime] = useState(true);
  const [timer, setTimer] = useState(true);
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [intervalTime, setIntervalTime] = useState(null);
  const [initTimer, setInitTimer] = useState({
    textButton: "Comenzar",
    playTimer: false,
  });

  const handleFirstTime = () => {
    setFirstTime(false);
    handleSetTime();
  };

  const handleEditTime = () => {
    setTimer(true);
  };

  const handleSetTime = () => {
    setTimer(false);
  };

  const handleIncrement = (property) => {
    setTime((prevDataTime) => {
      const updatedValue = parseInt(prevDataTime[property]) + 1;

      const maxAllowedValue = property === "hours" ? 23 : 59;

      const newValue = updatedValue > maxAllowedValue ? 0 : updatedValue;

      return {
        ...prevDataTime,
        [property]: newValue < 10 ? `0${newValue}` : `${newValue}`,
      };
    });
  };

  const handleDecrement = (property) => {
    setTime((prevDataTime) => {
      const updatedValue = parseInt(prevDataTime[property]) - 1;

      const maxAllowedValue = property === "hours" ? 23 : 59;

      const newValue = updatedValue < 0 ? maxAllowedValue : updatedValue;

      return {
        ...prevDataTime,
        [property]: newValue < 10 ? `0${newValue}` : `${newValue}`,
      };
    });
  };

  function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
  }

  const handlePlayTimer = () => {
    if (initTimer.playTimer === false) {
      const newIntervalTime = setInterval(() => {
        setTime((prevDataTime) => {
          let newSeconds = parseInt(prevDataTime.seconds);
          let newMinutes = parseInt(prevDataTime.minutes);

          if (newSeconds > 0) {
            newSeconds = newSeconds - 1;
          } else if (newMinutes > 0) {
            newMinutes = newMinutes - 1;
            newSeconds = 59;
          }

          // Formatear los números a dos dígitos
          newSeconds = newSeconds < 10 ? `0${newSeconds}` : newSeconds;
          newMinutes = newMinutes < 10 ? `0${newMinutes}` : newMinutes;

          return {
            ...prevDataTime,
            seconds: newSeconds,
            minutes: newMinutes,
          };
        });
      }, 1000);
      setIntervalTime(newIntervalTime);
    } else {
      clearInterval(intervalTime);
      console.log("Se ha pausado el interval");
    }

    setInitTimer((prevState) => ({
      ...prevState,
      textButton: prevState.textButton === "Comenzar" ? "Pausar" : "Comenzar",
      playTimer: !prevState.playTimer,
    }));
  };

  return (
    <div
      className="flex flex-col gap-16 mt-2 w-full items-center justify-center"
      id="timer"
    >
      <h1 className="w-full text-4xl font-bold tracking-tighter shadow-sm text-[#BFFF00]">
        Contabiliza el tiempo para completar tu tarea.
      </h1>
      <div className="flex flex-col w-full gap-16">
        <div className="w-full flex flex-col items-center">
          <div className="w-max flex flex-col">
            <div className="flex">
              <TimeUnity
                timeUnity="hours"
                key="hours"
                time={time}
                timer={timer}
                handleIncrement={() => {
                  handleIncrement("hours");
                }}
                handleDecrement={() => {
                  handleDecrement("hours");
                }}
              />
              <TimeUnity
                timeUnity="minutes"
                key="minutes"
                time={time}
                timer={timer}
                handleIncrement={() => {
                  handleIncrement("minutes");
                }}
                handleDecrement={() => {
                  handleDecrement("minutes");
                }}
              />
              <TimeUnity
                timeUnity="seconds"
                key="seconds"
                time={time}
                timer={timer}
                handleIncrement={() => {
                  handleIncrement("seconds");
                }}
                handleDecrement={() => {
                  handleDecrement("seconds");
                }}
              />
            </div>
            <div className="w-full flex justify-between gap-4">
              {firstTime ? (
                <Button text="Establecer Tiempo" onClick={handleFirstTime} />
              ) : (
                !initTimer.playTimer &&
                (!timer ? (
                  <Button text="Editar tiempo" onClick={handleEditTime} />
                ) : (
                  <Button text="Establecer tiempo" onClick={handleSetTime} />
                ))
              )}
              {!timer && (
                <Button text={initTimer.textButton} onClick={handlePlayTimer} />
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="w-full text-2xl   font-bold tracking-tighter shadow-sm text-[#BFFF00]">
            Tarea que se está realizando :
          </h2>
          {activeTask.active ? (
            <div className="flex gap-4 items-center w-full text-gray-50 py-2 px-4 rounded-3xl">
              <span>•</span>
              <span className="font-bold text-2xl">{activeTask.task.name}</span>
              <span className="text-lg">{activeTask.task.description}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Timer;
