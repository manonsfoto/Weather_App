import { format } from "date-fns";
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
      <p>{format(Date.now(), "PPPP")}</p>
      <h2>
        {dataWeather.data.weather[0].description} in {dataWeather.data.name}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${dataWeather.data.weather[0].icon}@2x.png`}
        alt=""
      />
      <h2>Now: {dataWeather.data.main.temp}℃</h2>
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
