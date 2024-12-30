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
import { DarkModeContext } from "./context/Context";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
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
      <div className={`${darkMode && "dark"}`}>
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <RouterProvider router={router} />
        </DarkModeContext.Provider>
      </div>
    </>
  );
}

export default App;
