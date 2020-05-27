import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl = 'http://localhost:3000/api/events';
  private specialEventsUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient) { }

getEvents() {
  return this.http.get<any>(this.eventsUrl);
}

getSpecialEvent() {

  return this.http.get<any>(this.specialEventsUrl);
}
}
