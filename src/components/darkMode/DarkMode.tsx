import { useContext, useEffect } from "react";
import "./IsDarkMode.css";
import { IsDarkModeContext } from "../../context/Context";
import { motion } from "framer-motion";
import Moon from "../../assets/SVG/Moon";
import Sun from "../../assets/SVG/Sun";

const IsDarkMode = () => {
  const { IsDarkMode, setIsDarkMode } = useContext(IsDarkModeContext);
  useEffect(() => {
    const body = document.body;
    if (IsDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [IsDarkMode]);
  const className = `switch ${IsDarkMode ? "on" : "off"}`;
  return (
    <motion.div
      animate
      className={className}
      onClick={() => setIsDarkMode(!IsDarkMode)}
    >
      <motion.div animate>
        <div className="icon">{IsDarkMode ? <Moon /> : <Sun />}</div>
      </motion.div>
    </motion.div>
  );
};

export default IsDarkMode;
