import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Store, select } from '@ngrx/store';
import { WeatherState } from './store';
import * as weatherActions from './store/weather.actions';
import { Observable } from 'rxjs';
import { SelectedWeatherSelector } from './store/weather.selector';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  ali$!:Observable<any>;
  constructor(
    private store: Store<WeatherState>,
    private weatherService:WeatherService
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(SelectedWeatherSelector)).subscribe(res=>{
      console.log(res);

    })
  }

  selectedCity(event:{lat:number,lon:number}){
    this.store.dispatch(weatherActions.loadCityWeather({
      lat:event.lat,
      lon:event.lon
    }));

  }

  getCityListCallbackFunction = (term: string): Observable<any> => {
    return this.weatherService.getCityDetail(term)
  }




}
