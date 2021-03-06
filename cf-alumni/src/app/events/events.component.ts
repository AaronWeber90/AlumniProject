import { Component, OnInit } from '@angular/core';
import EventsData from 'src/assets/json/events.json';
import { SortDesc, GetFirstElem } from '../usefulfunctions';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events_list: any = EventsData;
  first_elem: any = GetFirstElem(this.events_list, true);
  constructor() { }

  ngOnInit(): void {}

}
