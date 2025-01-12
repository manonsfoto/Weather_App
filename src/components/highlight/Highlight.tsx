import { IDataWeather } from "../../interfaces/IDataWeather";
import "./Highlight.css";
import convertTime from "../../utils/function/convertTime";
import { useContext } from "react";
import { IsCelsiusContext } from "../../context/Context";

interface HighlightProps {
  data: IDataWeather;
}
const Highlight: React.FC<HighlightProps> = ({ data }) => {
  const { isCelsius } = useContext(IsCelsiusContext);
  return (
    <section className="stn-highlight">
      <p className="headline">Today’s Highlight</p>
      <div className="cards-wrapper">
        <article className=" flex wind">
          <p className="subtitle">Wind Status</p>
          <p className="emoji">🍃</p>
          <p>
            <span className="number-value">
              {isCelsius
                ? Math.round(Number(data.wind.speed) * 3.6)
                : Math.round(Number(data.wind.speed))}
            </span>{" "}
            {isCelsius ? "km/h" : "mph"}
          </p>
        </article>
        <article className=" flex humidity">
          <p className="subtitle">Humidity</p>
          <p className="emoji">💧</p>
          <p>
            <span className="number-value">{data.main.humidity}</span> %
          </p>
        </article>
        <article className="flex sun-box sunrise">
          <p className="emoji">🌄</p>
          <div>
            {" "}
            <p className="subtitle">Sunrise</p>
            <h4>{convertTime(data.sys.sunrise, data.timezone)}</h4>
          </div>
        </article>
        <article className="flex sun-box sunset">
          <p className="emoji">🌇</p>
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
