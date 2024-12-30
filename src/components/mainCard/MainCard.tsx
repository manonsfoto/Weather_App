import { format } from "date-fns";
import { IDataWeather } from "../../interface/IDataWeather";
import "./MainCard.css";
interface MainCardProps {
  data: IDataWeather;
}
const MainCard: React.FC<MainCardProps> = ({ data }) => {
  return (
    <article className="maincard flex">
      <div className="textbox-left">
        <p className="location">
          {data.name}, {data.sys.country}
        </p>
        <p className="weekday">{format(Date.now(), "EEEE")}</p>
        <p className="date-now">{format(Date.now(), "PPP")}</p>
      </div>
      <div>
        <div className="btn-temp-wrapper">
          <button type="button">℃</button>
          <button type="button">℉</button>
        </div>
        <p className="temp-now"> {data.main.temp}℃</p>
        <p className="desc">{data.weather[0].description}</p>
        <p className="feelslike">Feels like {data.main.feels_like}º</p>
      </div>
    </article>
  );
};

export default MainCard;
