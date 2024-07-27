import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '8b4588c7adcf484690b141449242707';
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?key=${this.apiKey}&q=${city}`).pipe(
      catchError(error => {
        return of({ success: false, error: error.message });
      })
    );
  }

  getConditions(): Observable<any> {
    const conditionsUrl = '/assets/conditions.json';
    return this.http.get<any>(conditionsUrl).pipe(
      catchError(error => {
        return of({ success: false, error: error.message });
      })
    );
  }
}
