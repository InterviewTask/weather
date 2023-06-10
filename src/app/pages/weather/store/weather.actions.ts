import { createAction, props } from '@ngrx/store';
import { Weather } from '../models/weather.model';

export const searchWeather = createAction(
  '[Weather] Search Weather',
  props<{ cityName: string }>()
);
export const searchWeatherSuccess = createAction(
  '[Weather] Search Weather Success',
  props<{ payload: Weather }>()
);

export const searchWeatherFailure = createAction(
  '[Weather] Search Weather Failure',
  props<{ error: any }>()
);

