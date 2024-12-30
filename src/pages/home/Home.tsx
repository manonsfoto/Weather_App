import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import WeatherDisplay from "../../components/weatherDisplay/WeatherDisplay";
import { IDataWeather } from "../../interface/IDataWeather";
import "./Home.css";
import useFetch from "../../hooks/useFetch";
import { getCurrentURL } from "../../utils/api/Api";
import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  const [navInput, setNavInput] = useState<string>("dusseldorf");
  const [searchInput, setSearchInput] = useState<string>("");

  const dataWeather = useFetch<IDataWeather>(getCurrentURL(navInput));

  return (
    <>
      <NavBar setNavInput={setNavInput} />
      <SearchBar
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        setNavInput={setNavInput}
      />
      <WeatherDisplay dataWeather={dataWeather} />
    </>
  );
};

export default Home;
