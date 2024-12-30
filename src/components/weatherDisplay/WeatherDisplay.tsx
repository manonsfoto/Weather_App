import { IDataWeather } from "../../interface/IDataWeather";
import "./WeatherDisplay.css";
interface WeatherDisplayProps {
  dataWeather: IDataWeather | null;
}
const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ dataWeather }) => {
  return (
    <section className="stn-weather-display">
      <h2>
        {dataWeather?.weather[0].description} in {dataWeather?.name}
      </h2>
      <h1>🌞</h1>
      <h2>Aktuell: {dataWeather?.main.temp}℃</h2>
      <h2>
        Windgeschwindigkeit: {Math.round(Number(dataWeather?.wind.speed) * 3.6)}
        km/std
      </h2>
    </section>
  );
};

export default WeatherDisplay;
