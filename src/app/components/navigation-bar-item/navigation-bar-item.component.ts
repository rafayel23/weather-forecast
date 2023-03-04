import { Component, OnInit, Input } from '@angular/core';
import { DayForecast } from 'src/app/interfaces and constructors/day-forecast.constructor';

@Component({
  selector: 'app-navigation-bar-item',
  templateUrl: './navigation-bar-item.component.html',
  styleUrls: ['./navigation-bar-item.component.scss']
})
export class NavigationBarItemComponent implements OnInit {

  @Input() forecast: DayForecast;
  computedDate: string;

  ngOnInit(){

    let today = new Date().getDate();
    let tomorrow = today + 1;

    if(this.forecast.day === today){
      this.computedDate = 'Today'
    }
    else if(this.forecast.day === tomorrow){
      this.computedDate = 'Tommorow'
    }
    else{
      this.computedDate = `${this.forecast.day}-${this.forecast.month}`
    }
  }
  
}
