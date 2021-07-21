import { Component, OnInit } from '@angular/core';
import { AlumniDirComponent } from '../alumni-dir/alumni-dir.component';
import { EventsComponent } from '../events/events.component';
import { StoriesComponent } from '../stories/stories.component';
import { CareersComponent } from '../careers/careers.component';
import { IPopular } from '../usefulfunctions';

@Component({
  selector: 'app-popular-cards',
  templateUrl: './popular-cards.component.html',
  styleUrls: ['./popular-cards.component.scss']
})
export class PopularCardsComponent implements OnInit {
  event_comp = new EventsComponent().first_elem;
  career_comp = new CareersComponent().first_elem;
  alumni_comp = new AlumniDirComponent().first_elem;
  popular_list: IPopular[] = [
    {
      "name": this.career_comp.name,
      "date": this.career_comp.date,
      "image": this.career_comp.image,
      "type": "careers"
    },
    {
      "name": this.alumni_comp.name,
      "date": this.alumni_comp.date,
      "image": this.alumni_comp.image,
      "type": "alumni"
    },
    {
      "name": this.event_comp.name,
      "date": this.event_comp.date,
      "image": this.event_comp.image,
      "type": "events"
    }    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
