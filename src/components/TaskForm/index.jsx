import React from "react";
import Button from "../../components/Button";

const TaskForm = ({ handleCreateTask }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="w-full text-4xl font-bold tracking-tighter text-[#BFFF00]">
        Crea una nueva tarea, y comienza a completar objetivos.
      </h1>
      <form
        onSubmit={handleCreateTask}
        className=" text-gray-50 flex flex-col gap-4 w-full"
      >
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <label htmlFor="taskName">Nombre de la tarea</label>
            <input
              type="text"
              name="taskName"
              className="p-2 bg-transparent border-2 rounded-1xl outline-none border-gray-50 transition-all  focus:rounded-xl"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="taskDescription">Descripcion de la tarea</label>
            <input
              type="text"
              name="taskDescription"
              className="p-2 bg-transparent border-2 rounded-1xl outline-none border-gray-50 transition-all  focus:rounded-xl"
            />
          </div>
        </div>
        <Button text="Crear tarea" />
      </form>
    </div>
  );
};

export default TaskForm;
