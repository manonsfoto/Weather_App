import { createContext } from "react";

interface IIsDarkModeContext {
  IsDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsDarkModeContext = createContext<IIsDarkModeContext>(null!);

interface IIsCelsiusContext {
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsCelsiusContext = createContext<IIsCelsiusContext>(null!);

interface IFeelsLikeTempCContext {
  feelsLikeTempC: number | null;
  setFeelsLikeTempC: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FeelsLikeTempCContext = createContext<IFeelsLikeTempCContext>(
  null!
);

interface IFeelsLikeTempFContext {
  feelsLikeTempF: number | null;
  setFeelsLikeTempF: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FeelsLikeTempFContext = createContext<IFeelsLikeTempFContext>(
  null!
);

interface ICurrentWeatherConditionContext {
  currentWeatherCondition: string;
  setCurrentWeatherCondition: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrentWeatherConditionContext =
  createContext<ICurrentWeatherConditionContext>(null!);
