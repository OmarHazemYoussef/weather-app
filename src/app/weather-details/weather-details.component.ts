import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() weather: any;
  weatherIcon: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    if (this.weather) {
      this.weatherService.getConditions().subscribe(data => {
        const condition = data.find(cond => cond.code === this.weather.current.condition.code);
        this.weatherIcon = condition ? condition.icon : '';
      });
    }
  }
}
