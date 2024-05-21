import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNewsList(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      })
    };
    return this.http.get('https://livescore6.p.rapidapi.com/news/v2/list', httpOptions);
  }
}
