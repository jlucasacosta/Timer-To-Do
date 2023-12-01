import React, { createContext, useState } from "react";

const UseTimerContext = createContext();

function UseTimerProvider({ children }) {
  const [timer, setTimer] = useState({
    seconds: '0',
    minutes: '0',
    hours: '0',
  });

  return (
    <UseTimerContext.Provider value={{ timer, setTimer }}>
      {children}
    </UseTimerContext.Provider>
  );
}

export { UseTimerContext, UseTimerProvider };
