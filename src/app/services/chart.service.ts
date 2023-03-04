import { Injectable } from '@angular/core';
import { Details } from '../interfaces and constructors/day-forecast.constructor';
import Chart from 'chart.js'

@Injectable({
  providedIn: 'root'
})

export class ChartService {

  constructor() { }

  private normalizeHours(hour: number): string{
    if(hour < 10){
      return `0${hour}:00`
    }else{
      return `${hour}:00`
    }
  }

  public generateChart(details: Details[], targetId: string): Chart {

    const hours = details.map(detail => this.normalizeHours(detail.time));
    const temps = details.map(detail => detail.temp);

    const chart = new Chart(targetId,{
      type: 'line',
      data: {
        labels: hours,
        datasets: [{
          data: temps,
          borderColor: '#3cba9f',
          fill: true,
        }]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        },
        maintainAspectRatio: false,
      }
    })

    return chart
  }
  
}
