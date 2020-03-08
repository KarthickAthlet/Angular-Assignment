import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private API_URL = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getCardList(): Observable<any> {
    return this.http.get<any>(this.API_URL).pipe(tap(data => console.log(data)),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error(err);
    return errorMessage;
  }
}
