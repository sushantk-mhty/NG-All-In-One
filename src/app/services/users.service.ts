import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AppConstants } from '../constants/appConstants';
import { Observable, catchError, throwError } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private httpClient = inject(HttpClient);
  _baseURL!: string;
  constructor() {
    this._baseURL = AppConstants.baseURL;
  }
  public getUsers():Observable<Users[]> {
    return this.httpClient.get<Users[]>(this._baseURL)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage:string ='';
    if (error.error instanceof ErrorEvent) {
      errorMessage=`An error occurred: ${error.error.message}`;
    } else {
    
        errorMessage=`Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`;
    }
    errorMessage += '\n Something bad happened; please try again later.';
    return throwError(errorMessage);
  }
}
