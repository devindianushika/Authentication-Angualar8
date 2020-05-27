import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events = [

  ];

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getEvents()
    .subscribe(
      res => this.Events = res,
      err => console.log(err)
    );

  }



}
