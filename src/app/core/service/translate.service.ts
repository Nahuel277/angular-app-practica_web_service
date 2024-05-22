import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }

  public getLanguages(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }),
    };
    return this.http.get("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", httpOptions);
  }

  public translateText(text: string, target: string, source: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      })
    };
    const body = new HttpParams()
      .set('q', text)
      .set('target', target)
      .set('source', source);
    return this.http.post("https://google-translate1.p.rapidapi.com/language/translate/v2", body, httpOptions);
  }
}
