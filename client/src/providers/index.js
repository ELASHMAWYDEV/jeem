import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext(null);
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [activeColor, setActiveColor] = useState("brown");
  const globalThemes = {
    blue: { primary: "66, 89, 120", secondary: "1, 57, 94" },
    red: { primary: "235, 77, 75", secondary: "255, 121, 121" },
    green: { primary: "106, 176, 76", secondary: "186, 220, 88" },
    black: { primary: "47, 54, 64", secondary: "72, 80, 97" },
    brown: { primary: "165, 109, 78", secondary: "213, 146, 109" },
  };

  useEffect(() => {
    let activeColorStored = localStorage.getItem("activeColor");
    if (activeColorStored) {
    setActiveColor(activeColorStored);
    }
  }, []);

  useEffect(() => {
    const { primary, secondary } = globalThemes[activeColor];

    localStorage.setItem("activeColor", activeColor);

    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty("--secondary", secondary);
  }, [activeColor]);

  return (
    <AppContext.Provider value={{ activeColor, setActiveColor }}>
      {children}
    </AppContext.Provider>
  );
};
