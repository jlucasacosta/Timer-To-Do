import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseTimerProvider } from "./context/UseTimerContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import './index.css'
import Timer from "./pages/Tasks";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/home/tasks", element: <Tasks /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseTimerProvider>
      <RouterProvider router={router} />
    </UseTimerProvider>
  </React.StrictMode>
);
