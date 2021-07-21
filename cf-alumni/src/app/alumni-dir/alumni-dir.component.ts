import { Component, OnInit } from '@angular/core';
import StudentstData from 'src/assets/json/alumni.json';
import { SortDesc, GetFirstElem } from '../usefulfunctions';

@Component({
  selector: 'app-alumni-dir',
  templateUrl: './alumni-dir.component.html',
  styleUrls: ['./alumni-dir.component.scss']
})
export class AlumniDirComponent implements OnInit {
  students_list: any = StudentstData;
  first_element: any = GetFirstElem(this.students_list, true);
  constructor() { }

  GetGraduationYear(student_id: number): number {
    let date = new Date(this.students_list[student_id].date);
    return date.getFullYear();
  }

  ngOnInit(): void { }

}
