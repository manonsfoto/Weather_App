import { IDataWeather } from "../../interface/IDataWeather";
import "./WeatherDisplay.css";
import MainCard from "../mainCard/MainCard";
import Highlight from "../highlight/Highlight";
import Forecast from "../forecast/Forecast";

interface WeatherDisplayProps {
  dataWeather: {
    data: IDataWeather | null;
    loading: boolean;
  };
  cityNameInput: string;
}
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  dataWeather,
  cityNameInput,
}) => {
  if (!dataWeather.data) return;

  return (
    <section className="stn-weather-display flex">
      <div className="weather-card-wrapper flex">
        {" "}
        <MainCard data={dataWeather.data} />
        <Highlight data={dataWeather.data} />
      </div>
      <Forecast cityNameInput={cityNameInput} />
    </section>
  );
};

export default WeatherDisplay;
