import { Component, OnInit } from '@angular/core';
import StoriesData from 'src/assets/json/stories.json';
import { SortDesc, GetFirstElem, GetGraduationYear as ggy } from '../usefulfunctions';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories_list: any = StoriesData;
  first_elem: any = GetFirstElem(this.stories_list, true);
  constructor() { }

  GetGraduationYear(story_id: number): number {
    // let date = new Date(this.students_list[student_id].date);
    // return date.getFullYear();
    return ggy(this.stories_list[story_id]);
  }

  ngOnInit(): void {
    GetFirstElem(this.stories_list, true);
  }

}
