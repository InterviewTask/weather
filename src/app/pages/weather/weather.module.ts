import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './store';
import * as fromWeather from './store/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/weather.effects';
import { WeatherService } from './services/weather.service';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromWeather.weatherFeatureKey, fromWeather.reducer),
    EffectsModule.forFeature([WeatherEffects])
  ],
  providers:[WeatherService]
})
export class WeatherModule { }
