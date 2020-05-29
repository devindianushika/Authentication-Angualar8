import { Component, OnInit } from '@angular/core';
// import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // users: Observable<User[]>;
  // public userList: User[] = [];
  // public errMessage;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
  this.userService.getUserList()

    .subscribe(data => {
      data.forEach(element => {
        this.userService.user.push(new User(element));
        console.log(element);



      });
    });
}



}


export class User {

  // id: number;
  public email: string;
  public password: string;


  constructor(data: any) {
    this.email = data.email;
    this.password = data.password;
  }
}
