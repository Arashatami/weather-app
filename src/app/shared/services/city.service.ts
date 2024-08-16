import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { CityModel, ResponseCityModel } from '../models/city.model';
import { environment } from 'src/enviroments/environment';
import { AbstractCacheService } from 'src/app/core/services/caching.service';

@Injectable()
export class CityService {
  constructor(
    private http: HttpClient,
    private cityCacheService: CityCacheService
  ) { }

  searchCity(text: string): Observable<CityModel[]> {
    let cities$ = this.cityCacheService.getValue(text);
    if (!cities$) {
      cities$ = this.http.get<ResponseCityModel>(environment.cityApiUrl + "/search?name=" + text).pipe(
        map(res => res.results),
        shareReplay(1));
      this.cityCacheService.setValue(cities$, text);
    }
    return cities$;
  }

}

@Injectable()
export class CityCacheService extends AbstractCacheService<CityModel[]> { }
