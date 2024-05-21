import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  public getVideo(text: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }),
      params: new HttpParams()
                    .append('query', text)
                    .append('type', 'video')
                    .append('safesearch','false')
    };
    return this.http.get('https://simple-youtube-search.p.rapidapi.com/search', httpOptions);
  }
}
