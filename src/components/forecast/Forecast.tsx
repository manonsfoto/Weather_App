import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { IDataForecast } from "../../interface/IDataForecast";
import { getForecastURL } from "../../utils/api/Api";
import MiniCard from "../miniCard/MiniCard";
import "./Forecast.css";
import { IsCelsiusContext } from "../../context/Context";
import { motion } from "framer-motion";

interface ForecastProps {
  cityNameInput: string;
}
const Forecast: React.FC<ForecastProps> = ({ cityNameInput }) => {
  const { isCelsius } = useContext(IsCelsiusContext);
  const dataForecast = useFetch<IDataForecast>(
    getForecastURL(cityNameInput, isCelsius)
  );

  return (
    <section className="stn-forecast">
      <p className="headline">5 Days Forecast</p>
      <motion.div className=" carousel flex">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -5000 }}
          className="inner-carousel flex"
        >
          {dataForecast.data?.list.map((singleData) => (
            <motion.div className="item" key={singleData.dt}>
              {" "}
              <MiniCard singleData={singleData} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Forecast;
