import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {

  constructor(private _http: HttpClient) { }

  setIpInformation(ip: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'x-rapidapi-host': 'community-neutrino-ip-info.p.rapidapi.com',
        'Content-Type': 'application/json'
      })
    };
    const body = {
      'ip': ip,
      'reverse-lookup': 'true'
    }
    return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info', body, httpOptions);
  }
}
