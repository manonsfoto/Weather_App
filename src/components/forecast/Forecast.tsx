import useFetch from "../../hooks/useFetch";
import { IDataForecast } from "../../interface/IDataForecast";
import { getForecastURL } from "../../utils/api/Api";
import MiniCard from "../miniCard/MiniCard";
import "./Forecast.css";
interface ForecastProps {
  cityNameInput: string;
  isCelsius: boolean;
}
const Forecast: React.FC<ForecastProps> = ({ cityNameInput, isCelsius }) => {
  const dataForecast = useFetch<IDataForecast>(
    getForecastURL(cityNameInput, isCelsius)
  );
  console.log(dataForecast);

  return (
    <section className="stn-forecast">
      <p className="headline">5 Days Forecast</p>
      <div className="minicard-wrapper flex">
        {dataForecast.data?.list.map((singleData) => (
          <MiniCard key={singleData.dt} singleData={singleData} />
        ))}
      </div>
    </section>
  );
};

export default Forecast;
