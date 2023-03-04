import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './root/app.component';
import { NavigationBarItemComponent } from './components/navigation-bar-item/navigation-bar-item.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DayWeatherForecastComponent } from './components/day-weather-forecast/day-weather-forecast.component';
import { ForecastGraphComponent } from './components/forecast-graph/forecast-graph.component';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { PrependZeroPipe } from './pipes/prepend-zero.pipe';
import { WeekdayPipe } from './pipes/weekday.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [

    AppComponent,
    NavigationBarComponent,
    NavigationBarItemComponent,
    DayWeatherForecastComponent,
    ForecastGraphComponent,

    TemperaturePipe,
    PrependZeroPipe,
    WeekdayPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
