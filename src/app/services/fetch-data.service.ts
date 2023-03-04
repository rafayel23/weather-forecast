import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastData } from '../interfaces and constructors/forecast-data.interface';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {
  
  private forecastApi: string = 'https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&APPID=0b4950b5b041afd1eab7a8699255dcf6';
  private currentWeatherApi: string = 'https://api.openweathermap.org/data/2.5/weather?q=Yerevan&APPID=0b4950b5b041afd1eab7a8699255dcf6'

  constructor(private http: HttpClient){}

  public fetchWeeklyForecast(): Observable<ForecastData>{
    return this.http.get<ForecastData>(this.forecastApi)
  }

  public fetchCurrentWeather(): Observable<any>{
    return this.http.get<any>(this.currentWeatherApi)
  }

}
