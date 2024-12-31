import { format } from "date-fns";
import { IDataWeather } from "../../interface/IDataWeather";
import "./MainCard.css";
import { useContext } from "react";
import { IsCelsiusContext } from "../../context/Context";
interface MainCardProps {
  data: IDataWeather;
}
const MainCard: React.FC<MainCardProps> = ({ data }) => {
  const { isCelsius, setIsCelsius } = useContext(IsCelsiusContext);
  return (
    <section className="maincard flex">
      <div className="textbox-left">
        <h6 className="location">
          {data.name}, {data.sys.country}
        </h6>
        <h3>{format(Date.now(), "EEEE")}</h3>
        <p className="date-now">{format(Date.now(), "PP")}</p>
        <img
          className="img-weather"
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
      </div>
      <div>
        <div className="btn-temp-wrapper">
          <button onClick={() => setIsCelsius(true)} type="button">
            ℃
          </button>
          <button onClick={() => setIsCelsius(false)} type="button">
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
