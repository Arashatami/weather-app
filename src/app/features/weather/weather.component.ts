import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SearchCity, searchCity } from 'src/app/shared/store/city';
import { GetWeatherSelector, getWeather } from 'src/app/shared/store/weather';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  constructor(
    private store: Store
  ) {
    this.cityFilterCtrl.valueChanges.pipe(
      debounceTime(500),
      takeUntilDestroyed(),
      distinctUntilChanged(),
      filter((res: string) => res.length >= 3)
    ).subscribe(text => this.store.dispatch(searchCity({ text })));

    this.cityCtrl.valueChanges.pipe(
      takeUntilDestroyed(),
      distinctUntilChanged(),
    ).subscribe(city => this.store.dispatch(getWeather(city)));

  }


  cityCtrl: FormControl = new FormControl();
  cityFilterCtrl: FormControl = new FormControl();
  filteredCities = this.store.select(SearchCity);
  weather = this.store.select(GetWeatherSelector);
}
