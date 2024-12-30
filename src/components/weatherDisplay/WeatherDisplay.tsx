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
      <MainCard data={dataWeather.data} />
      <Highlight data={dataWeather.data} />
      <Forecast cityNameInput={cityNameInput} />
    </section>
  );
};

export default WeatherDisplay;
