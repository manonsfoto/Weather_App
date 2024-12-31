import { useContext, useEffect } from "react";
import "./DarkMode.css";
import { DarkModeContext } from "../../context/Context";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <div className="d-l-mode" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Sun" : "Moon"}
    </div>
  );
};

export default DarkMode;
