import { createAction, props } from '@ngrx/store';
import { CityModel } from '../../models/city.model';

/**
 * City
 */

export const searchCity = createAction(
  '[Weather] Search_City'
  , props<{ text: string }>()
);
export const searchCitySuccess = createAction(
  '[Weather] Search_City_SUCCESS', props<{ resultCities: Array<CityModel> }>()
);
export const searchCityError = createAction(
  '[Weather] Search_City_ERROR',
  props<{ errorMessage: string }>()
);

