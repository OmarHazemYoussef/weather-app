import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent {
  cityName: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  searchCity() {
    if (this.cityName.trim() === '') {
      this.weatherData = null;
      this.errorMessage = '';
      return;
    }

    this.weatherService.getWeather(this.cityName).subscribe(
      data => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'City not found';
        this.weatherData = null;
      }
    );
  }
}
