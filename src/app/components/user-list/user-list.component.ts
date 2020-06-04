import { Component, OnInit } from '@angular/core';
import { Userfields } from '../../userfields';
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
  public errorMsg;
  // public user: Userfields[] = [];


  constructor(public userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.fetchUser();
  }

  // fetchUser() {
  // this.userService.getUserList()

  //   .subscribe(data => {
  //     data.forEach(element => {
  //       this.userService.user.push(new Userfields(element));
  //       console.log(element);



  //     });
  //   });

  fetchUser() {
    this.userService.getUserList()
      .subscribe(
        data => this.userService.user = data,

        error => this.errorMsg = error,
        //  console.log(data);

      );
  }


  }



//   deleteuser(id: any) {
//     this.userService.deleteUser(id)
//       .subscribe(
//         data => {
//           console.log(data);
//           this.fetchUser();
//         },
//         error => console.log(error));

//   }
// }





