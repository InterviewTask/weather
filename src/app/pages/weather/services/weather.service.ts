import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WEATHER_API_KEY } from 'src/app/core/conf/app.config';
import { IWeather, Weather } from '../models/weather.model';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class WeatherService {
  private readonly apiKey = WEATHER_API_KEY
  constructor(
    private http: ApiService
  ) { }

  getCityDetail(city: string): Observable<any> {
    return this.http.get<any>
      (`find`, new HttpParams({
        fromObject: {
          q: city,
          appid: this.apiKey,
          units: 'metric'
        }
      }))
  }

  getWeather(locLat:number,locLon:number){
    return this.http.get<Weather>
      (`onecall`, new HttpParams({
        fromObject: {
          lat: locLat,
          lon: locLon,
          appid: this.apiKey,
          units: 'metric'
        }
      }))
  }


}
