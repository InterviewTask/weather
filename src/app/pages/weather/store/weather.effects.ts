import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, map, mergeMap, of,  } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import * as weatherActions from './weather.actions';


@Injectable()
export class WeatherEffects {
  constructor(
    private weatherService: WeatherService,
    private actions$: Actions
  ) { }

  searchWeatherEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(weatherActions.searchWeather),
      mergeMap(
        item => this.weatherService.getWeather(item.cityName)
          .pipe(
            map(data => weatherActions.searchWeatherSuccess({ payload:data })),
            catchError(error => of(weatherActions.searchWeatherFailure({ error })))
          ))

    )
  );


}
