import { CityModel } from './../../models/city.model';
import { createAction, props } from '@ngrx/store';
import { WeatherModel } from '../../models/weather.model';

/**
 * Weather
 */

export const getWeather = createAction(
  '[Weather] Get_Weather'
  , props<CityModel>()
);
export const getWeatherSuccess = createAction(
  '[Weather] Get_Weather_SUCCESS', props<{ weather: WeatherModel }>()
);
export const getWeatherError = createAction(
  '[Weather] Get_Weather_ERROR',
  props<{ errorMessage: string }>()
);