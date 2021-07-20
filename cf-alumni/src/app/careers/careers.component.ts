import { Component, OnInit } from '@angular/core';
import CareerData from 'src/assets/json/career.json';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  article_list: any = CareerData; // Array<Object> actually SHOULD work, but doesn't
  constructor() {
    // let a = this.article_list[0].date;
    console.log(this.article_list[0].date)
    this.article_list.sort(function (a: any, b: any) {
      let a_date: Date = new Date(a.date);
      let b_date: Date = new Date(b.date);
      return b_date.valueOf() - a_date.valueOf(); // desc
    });
    console.log(this.article_list[0].date);
    // let d = new Date(this.article_list[0].date);
    // console.log(this.article_list[0].date);
    // console.log(d.getMonth(), d.toDateString(), d.getFullYear());
  }

  ngOnInit(): void {
    
  }

}
