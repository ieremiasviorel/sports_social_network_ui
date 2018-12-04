import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  username: string = "John Doe";

  ngOnInit() {
  }

  printUsername() {
    console.log(this.username);
  }

}
