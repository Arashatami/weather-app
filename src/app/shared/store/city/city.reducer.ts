import { Action, createReducer, on } from '@ngrx/store';
import * as CityActions from './city.actions';
import { WeatherModel } from '../../models/weather.model';
import { CityModel } from '../../models/city.model';

export const cityFeatureName = 'searchCity';

export interface SearchCityrState {
  error: boolean;
  errorMessage: any;
  loading: boolean;
  resultCities?: CityModel[];
}

export const initialState: SearchCityrState = {
  loading: false,
  error: false,
  errorMessage: null,
  resultCities: []
};

const reducer = createReducer(
  initialState,
  on(
    CityActions.searchCity,
    (state: SearchCityrState, action) => ({
      ...state,
      loading: true,
    })
  ),
  on(
    CityActions.searchCitySuccess,
    (state: SearchCityrState, action: { resultCities: CityModel[] }) => ({
      ...state,
      loading: false,
      resultCities: action.resultCities
    })
  ),
  on(
    CityActions.searchCityError,
    (state: SearchCityrState, errorMessage: { errorMessage: string }) => ({
      ...state,
      loading: false,
      error: true,
      errorMessage
    })),

);

export function cityReducer(state: SearchCityrState | undefined, action: Action) {
  return reducer(state, action);
}
