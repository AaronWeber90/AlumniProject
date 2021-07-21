import { Component, OnInit } from '@angular/core';
import StudentstData from 'src/assets/json/alumni.json';

@Component({
  selector: 'app-alumni-dir',
  templateUrl: './alumni-dir.component.html',
  styleUrls: ['./alumni-dir.component.scss']
})
export class AlumniDirComponent implements OnInit {
  students_list: any = StudentstData;

  constructor() { 
    // dont know what to do here
  }

  ngOnInit(): void {
  }

}
