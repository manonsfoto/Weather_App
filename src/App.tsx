import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import RootLayout from "./rootLayout/RootLayout";
import { useState } from "react";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import { IsDarkModeContext, IsCelsiusContext } from "./context/Context";

function App() {
  const [IsDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
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
        <IsCelsiusContext.Provider value={{ isCelsius, setIsCelsius }}>
          <IsDarkModeContext.Provider value={{ IsDarkMode, setIsDarkMode }}>
            <RouterProvider router={router} />
          </IsDarkModeContext.Provider>
        </IsCelsiusContext.Provider>
      </div>
    </>
  );
}

export default App;
