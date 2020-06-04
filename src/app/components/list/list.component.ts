import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { element } from 'protractor';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }


  getUser() {
    this.userService.getUserList()
      .subscribe((data) => {
        data.forEach(element => {
          this.userService.user.push(new User(element));
          console.log(element);
        });
      });

  }

}



export class User {
  public email: string;
  public password: string;

  constructor(data: any) {
    this.email = data.email;
    this.password = data.password;
  }

}
