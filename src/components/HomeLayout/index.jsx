import React from "react";
import { Link } from "react-router-dom";
import { RxStopwatch } from "react-icons/rx";
import Button from "../Button";

const HomeLayout = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-8">
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-2">
          <hgroup className="w-full text-7xl font-bold tracking-tighter shadow-sm text-[#BFFF00]">
            <h1>Planificá tus ideas</h1>
            <h1>y llevalas a cabo</h1>
            <h1>aprovechando tu tiempo.</h1>
          </hgroup>
          <p className="text-gray-50">
            Optimiza tu rutina diaria y conquistá tus objetivos con Timer To-Do
            App.
          </p>
        </div>
        <div className="">
          <h1 className="text-gray-50 text-[20rem] z-10 drop-shadow-md  ">
            <RxStopwatch />
          </h1>
        </div>
      </div>
      <footer className="z-50">
        <Link to="/home/tasks">
          <Button text="Comenzar ahora" className="cursor-pointer" />
        </Link>
      </footer>
    </div>
  );
};

export default HomeLayout;
