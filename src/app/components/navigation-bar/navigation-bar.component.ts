import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { TransformService } from 'src/app/services/transform.service';
import { DayForecast } from 'src/app/interfaces and constructors/day-forecast.constructor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  weeklyForecast: DayForecast[] = [];
  selectedNavItem: number;

  constructor(
    private fetchData: FetchDataService,
    private transform: TransformService,
    private router: Router,
    ){}

  ngOnInit() {

    this.fetchData.fetchWeeklyForecast().subscribe(data => {
      this.weeklyForecast = this.transform.generateOrganizedWeeklyForecast(data);
    })

    /* --- show tommorows forecast by default --- */
    const tommorow = new Date().getDate() + 1;
    this.selectedNavItem = 1;
    this.router.navigate([tommorow])
  }


}
