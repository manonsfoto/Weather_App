import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import RootLayout from "./rootLayout/RootLayout";
import { useState } from "react";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import {
  IsDarkModeContext,
  IsCelsiusContext,
  FeelsLikeTempCContext,
  FeelsLikeTempFContext,
  CurrentWeatherConditionContext,
} from "./context/Context";

function App() {
  const [IsDarkMode, setIsDarkMode] = useState<boolean>(false);

  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [feelsLikeTempC, setFeelsLikeTempC] = useState<number | null>(null);
  const [feelsLikeTempF, setFeelsLikeTempF] = useState<number | null>(null);
  const [currentWeatherCondition, setCurrentWeatherCondition] =
    useState<string>("");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    )
  );
  return (
    <>
      <div className={`${IsDarkMode && "dark"}`}>
        <CurrentWeatherConditionContext.Provider
          value={{ currentWeatherCondition, setCurrentWeatherCondition }}
        >
          <FeelsLikeTempFContext.Provider
            value={{ feelsLikeTempF, setFeelsLikeTempF }}
          >
            <FeelsLikeTempCContext.Provider
              value={{ feelsLikeTempC, setFeelsLikeTempC }}
            >
              <IsCelsiusContext.Provider value={{ isCelsius, setIsCelsius }}>
                <IsDarkModeContext.Provider
                  value={{ IsDarkMode, setIsDarkMode }}
                >
                  <RouterProvider router={router} />
                </IsDarkModeContext.Provider>
              </IsCelsiusContext.Provider>
            </FeelsLikeTempCContext.Provider>
          </FeelsLikeTempFContext.Provider>
        </CurrentWeatherConditionContext.Provider>
      </div>
    </>
  );
}

export default App;
