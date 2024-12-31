import { useContext, useEffect } from "react";
import "./DarkMode.css";
import { DarkModeContext } from "../../context/Context";
import { motion } from "framer-motion";
import Moon from "../../assets/SVG/Moon";
import Sun from "../../assets/SVG/Sun";

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
  const className = `switch ${darkMode ? "on" : "off"}`;
  return (
    <motion.div
      animate
      className={className}
      onClick={() => setDarkMode(!darkMode)}
    >
      <motion.div animate>
        <div className="icon">{darkMode ? <Moon /> : <Sun />}</div>
      </motion.div>
    </motion.div>
  );
};

export default DarkMode;
