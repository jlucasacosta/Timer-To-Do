import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Navigation = () => {
  return (
    <header className="py-4 w-full flex justify-between">
      <Link to="/" className="text-2xl font-bold text-white tracking-tighter">Timer - To Do</Link>
      <nav className="flex gap-4 items-center">
        <Link to="/login" className="text-white hover:text-[#BFFF00]">Iniciar Sesion</Link>
        <Link to="/signup"><Button text="Registrarse" /></Link>
      </nav>
    </header>
  );
};

export default Navigation;
