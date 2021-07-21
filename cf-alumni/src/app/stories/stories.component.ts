import { Component, OnInit } from '@angular/core';
import StoriesData from 'src/assets/json/stories.json';
import { SortDesc, GetFirstElem } from '../usefulfunctions';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories_list: any = StoriesData;
  first_elem: any = GetFirstElem(this.stories_list);
  constructor() { }

  ngOnInit(): void {
    GetFirstElem(this.stories_list, true);
  }

}
