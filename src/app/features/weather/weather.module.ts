import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherEffects, weatherReducer } from 'src/app/shared/store/weather';
import { CityEffects, cityReducer } from 'src/app/shared/store/city';
import { WeatherCacheService, WeatherService } from 'src/app/shared/services/weather.service';
import { CityService, CityCacheService } from 'src/app/shared/services/city.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherCodePipe } from 'src/app/shared/pipes/weather-code.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherCodePipe
  ],
  providers: [
    WeatherCacheService,
    CityCacheService,
    WeatherService,
    CityService,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    WeatherRoutingModule,
    StoreModule.forFeature('weather', weatherReducer),
    StoreModule.forFeature('searchCity', cityReducer),
    EffectsModule.forFeature([CityEffects, WeatherEffects]),
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
  ],
  exports: [
    WeatherComponent,
    NgxMatSelectSearchModule
  ]
})
export class WeatherModule { }
