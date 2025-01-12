import { createContext } from "react";

interface IIsDarkModeContext {
  IsDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsDarkModeContext = createContext<IIsDarkModeContext>(null!);

interface IIsCelsiusContext {
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsCelsiusContext = createContext<IIsCelsiusContext>(null!);
