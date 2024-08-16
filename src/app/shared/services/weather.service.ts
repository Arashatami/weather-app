import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityModel } from '../models/city.model';
import { WeatherModel, WeatherResponseModel } from '../models/weather.model';
import { AbstractCacheService } from 'src/app/core/services/caching.service';
import { environment } from 'src/enviroments/environment';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(
    private http: HttpClient,
    private weatherCacheService: WeatherCacheService
  ) { }

  getWeather(city: CityModel): Observable<WeatherModel> {
    let weather$ = this.weatherCacheService.getValue(city.id);
    if (!weather$) {
      weather$ = this.http.get<WeatherResponseModel>(environment.weatherApiUrl + `/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`).pipe(
        map(res => res.current_weather),
        shareReplay(1));
      this.weatherCacheService.setValue(weather$, city.id);
    }
    return weather$;
  }

}

@Injectable()
export class WeatherCacheService extends AbstractCacheService<WeatherModel> { }


