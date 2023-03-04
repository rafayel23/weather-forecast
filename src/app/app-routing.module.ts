import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayWeatherForecastComponent } from './components/day-weather-forecast/day-weather-forecast.component';

const routes: Routes = [
  {path: ':day', component: DayWeatherForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }