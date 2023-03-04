import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details, DayForecast } from 'src/app/interfaces and constructors/day-forecast.constructor';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { TransformService } from 'src/app/services/transform.service';

@Component({
  selector: 'app-day-weather-forecast',
  templateUrl: './day-weather-forecast.component.html',
  styleUrls: ['./day-weather-forecast.component.scss']
})
export class DayWeatherForecastComponent implements OnInit {

  weeklyForecast: DayForecast[];
  selectedDayDetails: Details[];

  constructor(
    private active: ActivatedRoute,
    private fetchData: FetchDataService,
    private transform: TransformService,
    ){}

  ngOnInit() {
    this.fetchData.fetchWeeklyForecast().subscribe(forecast => {
      this.weeklyForecast = this.transform.generateOrganizedWeeklyForecast(forecast);
      this.active.paramMap.subscribe(params => {
        const targetDay = this.weeklyForecast.find(forecast => {
          return forecast.day === +params.get('day');
        })
        this.selectedDayDetails = targetDay.details;
      })
    })
  }
}