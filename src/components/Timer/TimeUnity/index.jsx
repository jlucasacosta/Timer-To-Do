import React from "react";
import { FaArrowUp, FaArrowDown, FaCircle } from "react-icons/fa";

const TimeUnity = ({
  time,
  timer,
  timeUnity,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className="flex flex-col w-full">
      <span className="text-gray-50 text-base">{timeUnity.toUpperCase()}</span>
      <div className="flex justify-between items-center w-40">
        <span className="text-8xl font-bold text-[#BFFF00]">
          {time[timeUnity]}
        </span>
        {timer ?  (
          <div className="flex flex-col items-center justify-center text-[#BFFF00] gap-4">
            <button onClick={handleIncrement}>
              <FaArrowUp />
            </button>
            <button className="hover:text-[#a6dd11]" onClick={handleDecrement}>
              <FaArrowDown />
            </button>
          </div>
        ) : timeUnity === "seconds" ? null : (
          <div className="flex flex-col items-center justify-center text-[#BFFF00] gap-4">
            <FaCircle />
            <FaCircle />
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeUnity;
