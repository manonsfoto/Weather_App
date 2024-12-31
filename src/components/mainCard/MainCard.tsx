import { format } from "date-fns";
import { IDataWeather } from "../../interface/IDataWeather";
import "./MainCard.css";
import { useContext } from "react";
import { IsCelsiusContext } from "../../context/Context";
import LocationIcon from "../../assets/SVG/LocationIcon";
interface MainCardProps {
  data: IDataWeather;
}
const MainCard: React.FC<MainCardProps> = ({ data }) => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);
  return (
    <section className="maincard flex">
      <div className="textbox-left">
        <p className="location">
          <LocationIcon /> {data.name}, {data.sys.country}
        </p>
        <h3>{format(Date.now(), "EEEE")}</h3>
        <p className="date-now">{format(Date.now(), "PP")}</p>
        <img
          className="img-weather"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
      </div>
      <div className="textbox-right flex">
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
        <p className="temp-now">
          {" "}
          {data.main.temp}
          {isCelsius ? "℃" : "℉"}
        </p>
        <h5>{data.weather[0].description}</h5>
        <p className="feelslike">Feels like {data.main.feels_like}º</p>
      </div>
    </section>
  );
};

export default MainCard;
