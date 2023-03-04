import { Component, Input, OnChanges } from '@angular/core';
import { Details } from 'src/app/interfaces and constructors/day-forecast.constructor';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-forecast-graph',
  templateUrl: './forecast-graph.component.html',
  styleUrls: ['./forecast-graph.component.scss']
})
export class ForecastGraphComponent implements OnChanges {

  @Input() details: Details[];
  graphContent = [];

  constructor(private chart: ChartService) {}

  ngOnChanges(){
    if(this.details){
      this.graphContent = this.chart.generateChart(this.details,'graph-id')
    }
  }
}
