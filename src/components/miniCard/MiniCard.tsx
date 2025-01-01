import { format } from "date-fns";
import { IList } from "../../interface/IDataForecast";
import "./MiniCard.css";
import { useContext } from "react";
import { IsCelsiusContext } from "../../context/Context";
interface MiniCardProps {
  singleData: IList;
}
const MiniCard: React.FC<MiniCardProps> = ({ singleData }) => {
  const { isCelsius } = useContext(IsCelsiusContext);
  return (
    <article className="minicard flex">
      <p>
        {format(new Date(singleData.dt_txt), "EEE") ===
        format(Date.now(), "EEE")
          ? "Today"
          : format(new Date(singleData.dt_txt), "EEE")}
      </p>
      <p>{format(new Date(singleData.dt_txt), "h:mm a")}</p>
      <img
        src={`https://openweathermap.org/img/wn/${singleData.weather[0].icon}@2x.png`}
        alt={singleData.weather[0].description}
      />
      <p>
        {Math.round(singleData.main.temp)} {isCelsius ? "℃" : "℉"}
      </p>
    </article>
  );
};

export default MiniCard;
