import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

// const ThemeContext = createContext("light");

type ThemeContextType = {
  theme: string;
  onToggle: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  onToggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const handleToggle = () => {
    setTheme((pre) => (pre === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, onToggle: handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeComponent = () => {
  const { theme, onToggle } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Theme: {theme}</h1>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
};
