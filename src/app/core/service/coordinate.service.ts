import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {

  constructor(private _http: HttpClient) { }

  getDitection(lat: string, lng: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'x-rapidapi-host': 'address-from-to-latitude-longitude.p.rapidapi.com'
      }),
      params: new HttpParams()
        .set('lat', lat)
        .set('lng', lng)
    };
    return this._http.get('https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi', httpOptions);
  }
}
