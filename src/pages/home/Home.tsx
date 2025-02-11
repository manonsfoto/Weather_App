import { useContext, useState } from "react";
import NavBar from "../../components/navBar/NavBar";

import { IDataWeather } from "../../interfaces/IDataWeather";
import "./Home.css";
import useFetch from "../../hooks/useFetch";
import { getCurrentURL } from "../../utils/api/Api";
import SearchBar from "../../components/searchBar/SearchBar";
import { IsCelsiusContext } from "../../context/Context";
import MainCard from "../../components/mainCard/MainCard";
import Forecast from "../../components/forecast/Forecast";
import Highlight from "../../components/highlight/Highlight";
import WhatToWear from "../../components/whatToWear/WhatToWear";

const Home = () => {
  const [cityNameInput, setCityNameInput] = useState<string>("dusseldorf");
  const [searchInput, setSearchInput] = useState<string>("");
  const { isCelsius } = useContext(IsCelsiusContext);

  const dataWeather = useFetch<IDataWeather>(
    getCurrentURL(cityNameInput, isCelsius)
  );
  if (!dataWeather.data) return;
  return (
    <div className="home">
      <aside className="sidebar flex">
        <NavBar setCityNameInput={setCityNameInput} />
        <SearchBar
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          setCityNameInput={setCityNameInput}
        />
      </aside>

      <MainCard data={dataWeather.data} />
      <Highlight data={dataWeather.data} />
      <WhatToWear data={dataWeather.data} cityNameInput={cityNameInput} />
      <Forecast cityNameInput={cityNameInput} />
    </div>
  );
};

export default Home;
