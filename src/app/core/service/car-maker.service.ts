import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarMakerService {

  constructor(private http: HttpClient) { }

  getMakes(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      })
    };
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes', httpOptions);
  }

  getModelsByMakeId(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
      })
    };
    return this.http.get('https://car-specs.p.rapidapi.com/v2/cars/makes/' + id + '/models', httpOptions);
  }
}
