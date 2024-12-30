import { IDataWeather } from "../../interface/IDataWeather";
import "./WeatherDisplay.css";
import MainCard from "../mainCard/MainCard";
interface WeatherDisplayProps {
  dataWeather: {
    data: IDataWeather | null;
    loading: boolean;
  };
}
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ dataWeather }) => {
  if (!dataWeather.data) return;
  return (
    <section className="stn-weather-display">
      <MainCard data={dataWeather.data} />

      <h2>{dataWeather.data.weather[0].description} </h2>

      <img
        src={`https://openweathermap.org/img/wn/${dataWeather.data.weather[0].icon}@2x.png`}
        alt=""
      />

      <h2>Feels like: {dataWeather.data.main.feels_like}℃</h2>
      <h2>Humidity: {dataWeather.data.main.humidity}%</h2>
      <h2>
        Wind: {Math.round(Number(dataWeather.data.wind.speed) * 3.6)}
        km/h
      </h2>
    </section>
  );
};

export default WeatherDisplay;
