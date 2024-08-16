
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as WeatherActions from './weather.actions';
import { CityModel } from '../../models/city.model';
import { WeatherModel } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';




@Injectable()

export class WeatherEffects {

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
  ) { }

  getWeather = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.getWeather),
      switchMap((city: CityModel) => this.weatherService.getWeather(city).pipe(
        map((weather: WeatherModel) => WeatherActions.getWeatherSuccess({ weather })),
        catchError(err => of(WeatherActions.getWeatherError({ errorMessage: err })))
      ))
    ));

}
