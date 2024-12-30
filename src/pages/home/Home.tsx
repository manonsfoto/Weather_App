import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import WeatherDisplay from "../../components/weatherDisplay/WeatherDisplay";
import { IDataWeather } from "../../interface/IDataWeather";
import "./Home.css";

const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [dataWeather, setDataWeather] = useState<IDataWeather | null>(null);
  const [navInput, setNavInput] = useState<string>("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setDataWeather(data));
  }, []);
  return (
    <>
      <NavBar />
      <WeatherDisplay dataWeather={dataWeather} />
    </>
  );
};

export default Home;
