import { createContext } from "react";

interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<IDarkModeContext>(null!);

interface IIsCelsiusContext {
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsCelsiusContext = createContext<IIsCelsiusContext>(null!);
