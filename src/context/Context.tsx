import { createContext } from "react";
interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const DarkModeContext = createContext<IDarkModeContext>(null!);
