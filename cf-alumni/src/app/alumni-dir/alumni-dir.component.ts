import { Component, OnInit } from '@angular/core';
import StudentstData from 'src/assets/json/alumni.json';
import { SortDesc, GetFirstElem, GetGraduationYear as ggy} from '../usefulfunctions';

@Component({
  selector: 'app-alumni-dir',
  templateUrl: './alumni-dir.component.html',
  styleUrls: ['./alumni-dir.component.scss']
})
export class AlumniDirComponent implements OnInit {
  students_list: any = StudentstData;
  first_elem: any = GetFirstElem(this.students_list, true);
  description: string[] = [];
  constructor() { }

  GetGraduationYear(student_id: number): number {
    // let date = new Date(this.students_list[student_id].date);
    // return date.getFullYear();
    return ggy(this.students_list[student_id]);
  }

  ShowStudentText(student_id: number): void {
    // alert("I am working " + student_id);
    this.description[student_id] = this.students_list[student_id].text;
  }



  sortStudents(){
    const sortedStudents = this.students_list.sort();
    sortedStudents.sort((a:any , b:any) => a.name.localeCompare(b.name));
  }

  sortStudentsDesc(){
    const sortedStudents = this.students_list.sort();
    sortedStudents.sort((a:any , b:any) => b.name.localeCompare(a.name));
  }

  ngOnInit(): void {

   }

}
