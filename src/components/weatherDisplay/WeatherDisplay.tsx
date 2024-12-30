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
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  dataWeather,
  cityNameInput,
  isCelsius,
  setIsCelsius,
}) => {
  if (!dataWeather.data) return;
  return (
    <section className="stn-weather-display flex">
      <MainCard data={dataWeather.data} setIsCelsius={setIsCelsius} />
      <Highlight data={dataWeather.data} />
      <Forecast cityNameInput={cityNameInput} isCelsius={isCelsius} />
    </section>
  );
};

export default WeatherDisplay;
