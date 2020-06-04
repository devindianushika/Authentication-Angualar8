import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Userfields } from '../../userfields';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  id: any;
    user: Userfields;
  public errorMsg;
  constructor(private route: ActivatedRoute, private router: Router,
              public userService: UserService) { }

  ngOnInit() {
   
  }


  // getOne() {
  //   //  this.user = new Userfields();
  //   this.id = this.route.snapshot.params['id'];
  //   this.userService.getUser(this.id)
  //     .subscribe
  //     (data => this.userService.user = data,
  //       error => this.errorMsg = error,
  //     );


  //   console.log(this.id);
  // }
  //   this.userService.user = data;
  // }, error => console.log(error));





  // list() {
  //   this.router.navigate(['/special']);
  // }


// getOne() {
//   this.route.params.subscribe(params => {
//     const id = params['id'];
//     this.userService.getUser(id)
//     .subscribe(user => {
//       console.log(user);
//     });

//   });
// }


}
