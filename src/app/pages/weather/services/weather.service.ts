import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WEATHER_API_KEY } from 'src/app/core/conf/app.config';
import { Weather } from '../models/weather.model';

@Injectable()
export class WeatherService {
  apiKey = WEATHER_API_KEY
  constructor(
    private http:HttpClient
  ) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>
    (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
  }
}
