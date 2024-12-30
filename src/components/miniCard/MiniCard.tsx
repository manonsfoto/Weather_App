import { format } from "date-fns";
import { IList } from "../../interface/IDataForecast";
import "./MiniCard.css";
interface MiniCardProps {
  singleData: IList;
}
const MiniCard: React.FC<MiniCardProps> = ({ singleData }) => {
  return (
    <article className="minicard flex">
      <p>
        {format(new Date(singleData.dt_txt), "EEE") ===
        format(Date.now(), "EEE")
          ? "Today"
          : format(new Date(singleData.dt_txt), "EEE")}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${singleData.weather[0].icon}@2x.png`}
        alt={singleData.weather[0].description}
      />
      <p>{singleData.main.temp} ℃</p>
    </article>
  );
};

export default MiniCard;
