import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WEATHER_API_KEY } from 'src/app/app.config';

@Injectable()
export class WeatherService {
  apiKey = WEATHER_API_KEY
  constructor(
    private http:HttpClient
  ) { }

  getWeather(city: string): Observable<weather> {
    return this.http.get<weather>
    (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d0ed5bdf9bdeaf55d8224853725405fd&units=metric`)
  }
}
