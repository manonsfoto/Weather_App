import { useContext } from "react";
import "./DarkMode.css";
import { DarkModeContext } from "../../context/Context";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className="d-l-mode" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Sun" : "Moon"}
    </div>
  );
};

export default DarkMode;
