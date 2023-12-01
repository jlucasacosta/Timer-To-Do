import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Navigation from "../components/Navigation";
import TaskForm from "../components/TaskForm";
import ShowTasks from "../components/ShowTasks";
import Wave from "../assets/wave.svg";
import WaveReverse from "../assets/wave-1.svg";
import Timer from "../components/Timer";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState({
    task: "",
    active: false,
  });

  const handleSetTask = () => {
    setActiveTask({
      ...activeTask,
      active: true,
    });
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    const taskForm = new FormData(e.target);
    const nameTask = taskForm.get("taskName");
    const descriptionTask = taskForm.get("taskDescription");

    const newTask = {
      name: nameTask,
      description: descriptionTask,
      id: uuid(),
    };

    setActiveTask({
      ...activeTask,
      task: newTask,
    });

    setTasks((prevTasks) => [...prevTasks, newTask]);

    e.target.reset();
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container relative mx-auto px-4 flex flex-col items-center overflow-x-hidden">
      <section className="min-h-screen w-screen bg-[#26263a] flex justify-center">
        <div className="w-3/4 h-auto flex flex-col items-center justify-between">
          <Navigation />
          <div className="w-screen flex flex-col items-center justify-between flex-1">
            <div className="w-3/4">
              <TaskForm handleCreateTask={handleCreateTask} />
              <ShowTasks
                handleDeleteTask={handleDeleteTask}
                handleSetTask={handleSetTask}
                tasks={tasks}
              />
            </div>
            <div className="w-full">
              <img src={Wave} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-screen bg-[#26263a] flex flex-col items-center">
        <img src={WaveReverse} alt="" />
        <div className="w-3/4 flex flex-col items-center gap-8">
          <Timer activeTask={activeTask} />
        </div>
      </section>
    </div>
  );
};

export default Tasks;
