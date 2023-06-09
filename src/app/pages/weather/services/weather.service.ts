import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WEATHER_API_KEY } from 'src/app/core/conf/app.config';
import { Weather } from '../models/weather.model';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class WeatherService {
  private readonly apiKey = WEATHER_API_KEY
  constructor(
    private http: ApiService
  ) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>
      (`weather`, new HttpParams({
        fromObject: {
          q: city,
          appid: this.apiKey,
          units: 'metric'
        }
      }))
  }
}
