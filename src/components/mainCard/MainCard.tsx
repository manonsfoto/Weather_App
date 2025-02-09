import { format } from "date-fns";
import { IDataWeather } from "../../interfaces/IDataWeather";
import "./MainCard.css";
import { useContext } from "react";
import {
  CurrentWeatherConditionContext,
  FeelsLikeTempCContext,
  FeelsLikeTempFContext,
  IsCelsiusContext,
} from "../../context/Context";
import LocationIcon from "../../assets/SVG/LocationIcon";
interface MainCardProps {
  data: IDataWeather;
}
const MainCard: React.FC<MainCardProps> = ({ data }) => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);
  const { setFeelsLikeTempC } = useContext(FeelsLikeTempCContext);
  const { setFeelsLikeTempF } = useContext(FeelsLikeTempFContext);
  const { setCurrentWeatherCondition } = useContext(
    CurrentWeatherConditionContext
  );

  if (isCelsius === true) {
    setFeelsLikeTempC(Math.round(data.main.feels_like));
  }
  if (isCelsius === false) {
    setFeelsLikeTempF(Math.round(data.main.feels_like));
  }
  setCurrentWeatherCondition(data.weather[0].description);
  return (
    <section className="maincard flex">
      <div className="textbox-top flex">
        {" "}
        <p className="location">
          <LocationIcon /> {data.name}, {data.sys.country}
        </p>
        <div className="btn-temp-wrapper">
          <button
            className={`${isCelsius ? "temp-active" : "temp-btn"}`}
            onClick={() => setIsCelsius(true)}
            type="button"
          >
            ℃
          </button>
          <button
            className={`${isCelsius ? "temp-btn" : "temp-active"} `}
            onClick={() => setIsCelsius(false)}
            type="button"
          >
            ℉
          </button>
        </div>
      </div>

      <div className="textbox-bottom flex">
        <h3 className="left">{format(Date.now(), "EEEE")}</h3>
        <p className="date-now left">{format(Date.now(), "PP")}</p>
        <img
          className="img-weather right"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />{" "}
        <p className="temp-now right">
          {" "}
          {Math.round(data.main.temp)} {isCelsius ? "℃" : "℉"}
        </p>
        <h5 className="right">{data.weather[0].description}</h5>
        <p className="right">Feels like {Math.round(data.main.feels_like)} º</p>
      </div>
    </section>
  );
};

export default MainCard;
