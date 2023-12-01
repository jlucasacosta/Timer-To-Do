import React from "react";
import { FaXmark, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ShowTasks = ({ tasks, handleDeleteTask, handleSetTask }) => {
  return (
    <article className="w-full">
      <h2 className="text-2xl py-8 font-bold tracking-tighter shadow-sm text-[#BFFF00]">
        Tareas para completar :
      </h2>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="text-gray-50 flex items-center justify-between w-full py-4 px-8"
        >
          <div className="flex gap-4 items-center">
            <span>•</span>
            <span className="font-bold text-xl">{task.name}</span>
            <span className="text-base">{task.description}</span>
          </div>
          <div className="flex gap-8 items-center text-2xl">
            <Link
              to="#timer"
              className="hover:text-[#BFFF00]"
              onClick={handleSetTask}
            >
              <FaPlay />
            </Link>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="hover:text-[#BFFF00]"
            >
              <FaXmark />
            </button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default ShowTasks;
