import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroText:String = "Our greatest Discovery is you!";
  heroTitle1:String = "CodeFactory";
  heroTitle2:String = "Alumni!";
  constructor() { }

  ngOnInit(): void {
  }

}
