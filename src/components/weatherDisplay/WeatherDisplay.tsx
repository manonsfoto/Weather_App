import { IDataWeather } from "../../interface/IDataWeather";
import "./WeatherDisplay.css";
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
      <h2>
        {dataWeather.data.weather[0].description} in {dataWeather.data.name}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${dataWeather.data.weather[0].icon}@2x.png`}
        alt=""
      />
      <h2>Now: {dataWeather.data.main.temp}℃</h2>
      <h2>Feels like: {dataWeather.data.main.feels_like}℃</h2>
      <h2>
        Wind Speed: {Math.round(Number(dataWeather.data.wind.speed) * 3.6)}
        km/h
      </h2>
    </section>
  );
};

export default WeatherDisplay;
