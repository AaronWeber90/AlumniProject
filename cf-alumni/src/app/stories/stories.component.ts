import { Component, OnInit } from '@angular/core';
import StoriesData from 'src/assets/json/stories.json';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories_list: any = StoriesData;

  constructor() { }

  ngOnInit(): void {
  }

}
