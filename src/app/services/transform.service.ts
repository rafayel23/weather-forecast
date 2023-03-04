import { Injectable } from '@angular/core';
import { ForecastData } from '../interfaces and constructors/forecast-data.interface';
import { HourlyForecast } from '../interfaces and constructors/hourly-forecast.interface';
import { DayForecast, Details } from '../interfaces and constructors/day-forecast.constructor';

@Injectable({
  providedIn: 'root'
})

// ----------------------- transforming request response into organized Array

export class TransformService {

  constructor(){}

  private getTime(forecast: HourlyForecast): number{
    return new Date(forecast.dt_txt).getHours()
  }

  private getDate(forecast: HourlyForecast): number{
    return new Date(forecast.dt_txt).getDate()
  }
  
  private getWeekDay(forecast: HourlyForecast): number{
    return new Date(forecast.dt_txt).getDay() + 1;
  }

  private getMonth(forecast: HourlyForecast): number{
    return new Date(forecast.dt_txt).getMonth() + 1;
    
  }

  /* --- sometimes request can response with data from yesterday --- */
  private removePossibleOffset(list: HourlyForecast[]): HourlyForecast[]{
    const today = new Date().getDate()
    while(this.getDate(list[0]) !== today){
      list.splice(0,1)
    }
    return list;
  }


  /* --- only for convinience --- */
  private splitIntoDays(list: HourlyForecast[]): HourlyForecast[][]{

    list = this.removePossibleOffset(list)

    let splitedArray = [ [] ];
    let nestedArrayIndex = 0;

    for(let i = 0; i < list.length; i++){

      splitedArray[nestedArrayIndex].push(list[i]);

      if(list[i + 1]){
        let currentdate = this.getDate(list[i]);
        let nextDate = this.getDate(list[i + 1])
        if(currentdate !== nextDate){
          splitedArray.push([]);
          nestedArrayIndex++
        }
      }
      
    }
    return splitedArray
  }


  private generateOrganizedDayForecast(dayTimeFractions: HourlyForecast[]): DayForecast{

    /* --- sample to store STATIC details --- */
    const sample = dayTimeFractions[0];
    const date = this.getDate(sample);
    const month = this.getMonth(sample);
    const weekDay = this.getWeekDay(sample);

    /* --- no data provided for average state or average icon --- */
    const centerIndex = Math.floor(dayTimeFractions.length / 2)
    const icon = dayTimeFractions[centerIndex].weather[0].icon
    const state = dayTimeFractions[centerIndex].weather[0].main

    const details: Details[] = [];
    const allTemps: number[] = [];

    dayTimeFractions.forEach(fraction => {
      details.push({
        time: this.getTime(fraction),
        temp: fraction.main.temp,
        icon: fraction.weather[0].icon,
        state: fraction.weather[0].main,
      });
      allTemps.push(fraction.main.temp)
    });
    
    const maxTemp = Math.max(...allTemps)
    const minTemp = Math.min(...allTemps)

    return new DayForecast(date,month,weekDay,minTemp,maxTemp,state,icon,details)

  }


  /* --- Public API --- */

  public generateOrganizedWeeklyForecast(forecast: ForecastData): DayForecast[] {

    const dayList = this.splitIntoDays(forecast.list);
    const weeklyForecast: DayForecast[] = dayList.map(day => {
      return this.generateOrganizedDayForecast(day)
    });
    return weeklyForecast
  }

}