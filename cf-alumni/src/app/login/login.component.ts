import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  getData(data:NgForm) {
    console.warn(data)
  }


  ngOnInit(): void {
  }

}
