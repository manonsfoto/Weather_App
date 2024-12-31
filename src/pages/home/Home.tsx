import { useContext, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import WeatherDisplay from "../../components/weatherDisplay/WeatherDisplay";
import { IDataWeather } from "../../interface/IDataWeather";
import "./Home.css";
import useFetch from "../../hooks/useFetch";
import { getCurrentURL } from "../../utils/api/Api";
import SearchBar from "../../components/searchBar/SearchBar";
import { IsCelsiusContext } from "../../context/Context";

const Home = () => {
  const [cityNameInput, setCityNameInput] = useState<string>("dusseldorf");
  const [searchInput, setSearchInput] = useState<string>("");
  const { isCelsius } = useContext(IsCelsiusContext);

  const dataWeather = useFetch<IDataWeather>(
    getCurrentURL(cityNameInput, isCelsius)
  );

  return (
    <div className="home flex">
      <aside className="side-bar flex">
        <NavBar setCityNameInput={setCityNameInput} />
        <SearchBar
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          setCityNameInput={setCityNameInput}
        />
      </aside>
      <WeatherDisplay dataWeather={dataWeather} cityNameInput={cityNameInput} />
    </div>
  );
};

export default Home;
