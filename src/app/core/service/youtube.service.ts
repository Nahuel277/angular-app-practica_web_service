import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concat, delay, retryWhen, take, throwError } from 'rxjs';
import { YouTubeResponse } from '../models/resultYoutube';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  public getVideo(text: string): Observable<YouTubeResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3292c03d46msh7286b8e42dc8e13p18612ajsn77050e0541ce',
        'x-rapidapi-host': 'simple-youtube-search.p.rapidapi.com'
      }),
      params: new HttpParams()
        .set('query', text)
        .set('type', 'video')
        .set('safesearch', 'false')
    };

    return this.http.get<YouTubeResponse>('https://simple-youtube-search.p.rapidapi.com/search', httpOptions);
      // .pipe(
      //   retryWhen(errors =>
      //     errors.pipe(
      //       delay(1000),
      //       take(3),
      //     )
      //   ),
      //   catchError(this.handleError)
      // );
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   let errorMessage = 'Algo salió mal; por favor, intenta nuevamente más tarde.';
  //   if (error.error instanceof ErrorEvent) {
  //     // Error del lado del cliente
  //     console.error('Ocurrió un error:', error.error.message);
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // Error del lado del servidor
  //     console.error(
  //       `Código de error del servidor: ${error.status}\n` +
  //       `Cuerpo del error: ${JSON.stringify(error.error)}`
  //     );
  //     errorMessage = `Código de error del servidor: ${error.status}\nCuerpo del error: ${JSON.stringify(error.error)}`;
  //   }
  //   return throwError(errorMessage);
  // }
}

