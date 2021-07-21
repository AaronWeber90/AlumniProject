import { Component, OnInit } from '@angular/core';
import { AlumniDirComponent } from '../alumni-dir/alumni-dir.component';
import { EventsComponent } from '../events/events.component';
import { StoriesComponent } from '../stories/stories.component';

@Component({
  selector: 'app-popular-cards',
  templateUrl: './popular-cards.component.html',
  styleUrls: ['./popular-cards.component.scss']
})
export class PopularCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
