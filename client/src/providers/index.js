import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("blue");
  const globalThemes = {
    blue: { primary: "#425970", secondary: "rgba(1, 57, 94, 1)" },
    red: { primary: "#425970", secondary: "rgba(1, 57, 94, 1)" },
    green: { primary: "#425970", secondary: "rgba(1, 57, 94, 1)" },
    black: { primary: "#425970", secondary: "rgba(1, 57, 94, 1)" },
  };

  useEffect(() => {
    localStorage.setItem(
      "primaryColor",
      globalThemes[activeColor].primary || globalThemes.blue.primary
    );
  }, [activeColor]);

  return (
    <AppContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </AppContext.Provider>
  );
};
