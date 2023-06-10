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

  // searchWeatherEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(weatherActions.searchCityDetailWeather),
  //     mergeMap(
  //       item => this.weatherService.getCityDetail(item.cityName)
  //         .pipe(
  //           map(data => weatherActions.searchCityDetailWeatherSuccess({ payload:data })),
  //           catchError(error => of(weatherActions.searchCityDetailWeatherFailure({ error })))
  //         ))
  //   )
  // );

  loadCityWeatherEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(weatherActions.loadCityWeather),
      mergeMap(
        item => this.weatherService.getWeather(item.lat,item.lon)
          .pipe(
            map(data => weatherActions.loadCityWeatherSuccess({ payload:data })),
            catchError(error => of(weatherActions.loadCityWeatherFailure({ error })))
          ))
    )
  );


}
