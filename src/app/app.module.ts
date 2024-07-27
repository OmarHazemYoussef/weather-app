import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CitySearchComponent } from './city-search/city-search.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
