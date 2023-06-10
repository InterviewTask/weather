import { createAction, props } from '@ngrx/store';
import { IWeather } from '../models/weather.model';
import { WeatherState } from '.';


export const loadCityWeather = createAction(
  '[Weather] loadCityWeather ',
  props<{ lat: number,lon:number }>()
);

export const loadCityWeatherSuccess = createAction(
  '[Weather]  load City Weather Success',
  props<{ payload: WeatherState }>()
);

export const loadCityWeatherFailure = createAction(
  '[Weather]  load City Weather Failure',
  props<{ error: any }>()
);

