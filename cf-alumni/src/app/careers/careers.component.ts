import { Component, OnInit } from '@angular/core';
import CareerData from 'src/assets/json/career.json';
import { SortDesc, GetFirstElem } from '../usefulfunctions';
import { AlumniDirComponent } from '../alumni-dir/alumni-dir.component';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  career_list: any = CareerData;
  first_elem: any = GetFirstElem(this.career_list, true);
  constructor() {
  }

  ngOnInit(): void {
    // let test = new AlumniDirComponent()
    // console.log(test.first_elem);
  }

}
