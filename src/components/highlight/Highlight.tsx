import { IDataWeather } from "../../interface/IDataWeather";
import "./Highlight.css";
import convertTime from "../../utils/function/convertTime";
import { useContext } from "react";
import { IsCelsiusContext } from "../../context/Context";

interface MainCardProps {
  data: IDataWeather;
}
const Highlight: React.FC<MainCardProps> = ({ data }) => {
  const { isCelsius } = useContext(IsCelsiusContext);
  return (
    <section className="stn-highlight">
      <p className="headline">Today’s Highlight</p>
      <div className="cards-wrapper flex">
        <article>
          <p className="subtitle">Wind Status</p>
          <p>
            <span className="number-value">
              {isCelsius
                ? Math.round(Number(data.wind.speed) * 3.6)
                : Math.round(Number(data.wind.speed))}
            </span>{" "}
            {isCelsius ? "km/h" : "mph"}
          </p>
        </article>
        <article>
          <p className="subtitle">Humidity</p>
          <p>
            <span className="number-value">{data.main.humidity}</span> %
          </p>
        </article>
        <article className="flex sun-box">
          <p>🌅</p>
          <div>
            {" "}
            <p className="subtitle">Sunrise</p>
            <h4>{convertTime(data.sys.sunrise, data.timezone)}</h4>
          </div>
        </article>
        <article className="flex sun-box">
          <p>🌇</p>
          <div>
            {" "}
            <p className="subtitle">Sunset</p>
            <h4>{convertTime(data.sys.sunset, data.timezone)}</h4>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Highlight;
