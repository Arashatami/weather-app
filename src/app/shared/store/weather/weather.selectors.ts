import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState, weatherFeatureName } from './weather.reducer';

export const weatherFeatureState = createFeatureSelector<WeatherState>(weatherFeatureName);

/**
 * Get Weather
 */
export const GetWeatherSelector = createSelector(
  weatherFeatureState,
  (state: WeatherState) => state.weather
);
