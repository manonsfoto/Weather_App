import { format } from "date-fns";
import { IDataWeather } from "../../interface/IDataWeather";
import "./MainCard.css";
interface MainCardProps {
  data: IDataWeather;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainCard: React.FC<MainCardProps> = ({ data, setIsCelsius }) => {
  return (
    <section className="maincard flex">
      <div className="textbox-left">
        <p className="location">
          {data.name}, {data.sys.country}
        </p>
        <p className="weekday">{format(Date.now(), "EEEE")}</p>
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
        <p className="temp-now"> {data.main.temp}℃</p>
        <p className="desc">{data.weather[0].description}</p>
        <p className="feelslike">Feels like {data.main.feels_like}º</p>
      </div>
    </section>
  );
};

export default MainCard;
