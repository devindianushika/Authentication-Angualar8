import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Userfields } from '../userfields';
// import { Router } from '@angular/router';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private getUserUrl = 'http://localhost:3000/api/getuser';
  private getUserByIdUrl = 'http://localhost:3000/api';
  private deleteUserUrl = 'http://localhost:3000/api/delete/{id}';

  constructor(private http: HttpClient) { }

  public user: Userfields[] = [];


  getUserList(): Observable<Userfields[]> {

    return this.http.get<Userfields[]>(`${this.getUserUrl}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'server error');
  }











  // getUser(id) {
  //   return this.http.get<Userfields[]>('http://localhost:3000/api/' + id).pipe(map(res => {
  //   console.log(res);
  //   }));

  // }


//   getUser(id: any): Observable<Userfields> {
//     return this.http.get<Userfields>('http://localhost:3000/api/' + id);
//     // .pipe(
//     //   catchError(this.errorHandler)
//     // );
//   }


//   deleteUser(id: any) {
//     return this.http.delete<any>('http://localhost:3000/api/delete/' + id);
//   }

// }

}
