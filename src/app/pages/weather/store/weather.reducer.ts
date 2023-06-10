import { Action, createReducer, on } from '@ngrx/store';

import { Weather } from '../models/weather.model';
import * as weatherActions from './weather.actions';
import { WeatherState } from '.';


export const weatherFeatureKey = 'weather';


export const initialState: WeatherState = {

    coord: {
      lon: 51.6776,
      lat: 32.6572
    },
    weather: [
      {
        id: 801,
        main: 'Clouds',
        description: 'few clouds',
        icon: '02n'
      }
    ],
    base: 'stations',
    main: {
      temp: 19.8,
      feels_like: 18.85,
      temp_min: 19.8,
      temp_max: 19.8,
      pressure: 1009,
      humidity: 39,
      sea_level: 1009,
      grnd_level: 844
    },
    visibility: 10000,
    wind: {
      speed: 0.88,
      deg: 42,
      gust: 2.83
    },
    clouds: {
      all: 15
    },
    dt: 1686347248,
    sys: {
      type: 1,
      id: 7460,
      country: 'IR',
      sunrise: 1686360312,
      sunset: 1686411617
    },
    timezone: 12600,
    id: 418863,
    name: 'Isfahan',
    cod: 200


};

export const reducer = createReducer(
  initialState,


  on(weatherActions.searchWeatherSuccess,(state,data)=>({
    ...state,
    ...data.payload
  })),
);
