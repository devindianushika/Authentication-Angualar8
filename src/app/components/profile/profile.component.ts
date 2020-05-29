import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  id: number;
  user: User[];

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  //   // this.user = new User();
  //   this.id = this.route.snapshot.params['id'];
  //   this.userService.getUser(this.id)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.user = data;
  //     }, error => console.log(error));
  // }


  // list() {
  //   this.router.navigate(['/special']);
  // }


}}
