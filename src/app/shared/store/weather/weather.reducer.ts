import { Action, createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { WeatherModel } from '../../models/weather.model';

export const weatherFeatureName = 'weather';

export interface WeatherState {
  error: boolean;
  errorMessage: any;
  loading: boolean;
  weather?: WeatherModel;
}

export const initialState: WeatherState = {
  loading: false,
  error: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  on(
    WeatherActions.getWeather,
    (state: WeatherState, action) => ({
      ...state,
      loading: true,
    })
  ),
  on(
    WeatherActions.getWeatherSuccess,
    (state: WeatherState, action: { weather: WeatherModel }) => ({
      ...state,
      loading: false,
      weather: action.weather
    })
  ),
  on(
    WeatherActions.getWeatherError,
    (state: WeatherState, errorMessage: { errorMessage: string }) => ({
      ...state,
      loading: false,
      error: true,
      errorMessage
    })),

);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
