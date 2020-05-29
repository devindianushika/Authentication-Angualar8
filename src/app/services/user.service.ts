import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
import {User} from '../models/user.model';
// import { Router } from '@angular/router';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private getUserUrl = 'http://localhost:3000/api/getuser';
  private getUserByIdUrl = 'http://localhost:3000/api/{id}';

  constructor(private http: HttpClient        ) { }

public user: User[] = [];


//   getUserList(): Observable<User[]> {

//     return this.http.get<User[]>(`${this.getUserUrl}`)
//     .pipe(
//    catchError(this.errorHandler)
//    );
//   }

//   errorHandler(error: HttpErrorResponse) {
// return observableThrowError (error.message || 'server error');
//   }


//   getUser(id: number): Observable<User[]> {
//     return this.http.get<User[]>(`${this.getUserByIdUrl}/${id}`)
//     .pipe(
//       catchError(this.errorHandler)
//       );
//      }


getUserList() {
return this.http.get<any>(this.getUserUrl);
}

}
