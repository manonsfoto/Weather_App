import { IDataWeather } from "../../interface/IDataWeather";
import "./Highlight.css";
import convertTime from "../../utils/function/convertTime";

interface MainCardProps {
  data: IDataWeather;
}
const Highlight: React.FC<MainCardProps> = ({ data }) => {
  return (
    <section className="stn-highlight">
      <p className="headline">Today’s Highlight</p>
      <div className="cards-wrapper flex">
        <article>
          <p className="subtitle">Wind Status</p>
          <p>
            <span className="number-value">
              {Math.round(Number(data.wind.speed) * 3.6)}
            </span>{" "}
            km/h
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
            <p className="number-value">
              {convertTime(data.sys.sunrise, data.timezone)}
            </p>
          </div>
        </article>
        <article className="flex sun-box">
          <p>🌇</p>
          <div>
            {" "}
            <p className="subtitle">Sunset</p>
            <p className="number-value">
              {convertTime(data.sys.sunset, data.timezone)}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Highlight;
