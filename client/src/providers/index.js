import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("blue");
  const globalColors = {
    blue: ["#425970", "rgba(1, 57, 94, 1)"],
    red: [],
  };

  useEffect(() => {
    localStorage.setItem(
      "primaryColor",
      globalColors[activeColor][0] || globalColors.blue[0]
    );
  }, [activeColor]);

  return (
    <AppContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </AppContext.Provider>
  );
};
