"use client"
// context/GlobalContext.js
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [transitionloading, settransitionLoading] = useState(false);
  const [pagelink, setpagelink] = useState(null);

  return (
    <GlobalContext.Provider value={{ loading, setLoading, transitionloading, settransitionLoading, pagelink, setpagelink }}>
      {children}
    </GlobalContext.Provider>
  );
};
