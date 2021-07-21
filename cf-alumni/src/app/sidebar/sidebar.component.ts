import { Component, OnInit } from '@angular/core';
import { EventsComponent } from '../events/events.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  events: any = new EventsComponent();
  events_list: any = this.events.events_list;

  constructor() { }

  ngOnInit(): void {
    console.log(this.events_list)
  }

}
