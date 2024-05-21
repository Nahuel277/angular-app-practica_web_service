import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  // Link de la API -> https://rapidapi.com/deezerdevs/api/deezer-1
  public getMusic(text: string): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
    }
    return this.http.get("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + text, httpOptions);
  }

  public getTrack(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
    }
    return this.http.get("https://deezerdevs-deezer.p.rapidapi.com/track/" + id, httpOptions);
  }
}
