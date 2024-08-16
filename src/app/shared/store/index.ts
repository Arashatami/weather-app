import { CityEffects, cityReducer } from "./city";
import { WeatherEffects, weatherReducer } from "./weather";

export const appReducers = {
  city: cityReducer,
  weather: weatherReducer,
};
export const appEffects = [
  CityEffects,
  WeatherEffects
];