import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents = [];

  constructor(private eventService: EventsService,
              private router: Router) { }

  ngOnInit() {
    this.eventService.getSpecialEvent()
    .subscribe(
      res => this.specialEvents = res,
      err => {
        if ( err instanceof HttpErrorResponse) {
      if ( err.status === 401) {
this.router.navigate(['/login']);
      }
        }
      }
    );

  }

}
