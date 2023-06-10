import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Store } from '@ngrx/store';
import { Weather } from './models/weather.model';
import { WeatherState } from './store';
import * as weatherActions from './store/weather.actions';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
    private store: Store<WeatherState>
  ) { }

  ngOnInit(): void {

    this.store.select((state)=>state).subscribe(res=>{
      console.log(res);

    })

  }

  ali(){
    this.store.dispatch(weatherActions.searchWeather({ cityName: 'Tehran' }));
  }

}
