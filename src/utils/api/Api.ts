export const apiKey = import.meta.env.VITE_API_KEY;

export const BASE_URL: string = "https://api.openweathermap.org/data/2.5/";

export const getCurrentURL = (cityName: string): string => {
  const resultURL = `${BASE_URL}weather?q=${cityName}&appid=${apiKey}&units=metric`;
  return resultURL;
};
export const getForecastURL = (cityName: string): string => {
  const resultURL = `${BASE_URL}forecast?q=${cityName}&appid=${apiKey}&units=metric`;
  return resultURL;
};
