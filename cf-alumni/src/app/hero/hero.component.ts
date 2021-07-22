import { Component, OnInit } from '@angular/core';
import HeroData from 'src/assets/json/hero.json';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero_texts: any = HeroData;
  constructor() { }

  ngOnInit(): void {
  }

}
