import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-preferences',
  templateUrl: './profile-preferences.component.html',
  styleUrls: ['./profile-preferences.component.scss']
})
export class ProfilePreferencesComponent implements OnInit {

  SPORTS_LIST: string[] = ['Football', 'Tennis', 'Basketball', 'Running'];

  menuOptions: string[] = ['Preferences', 'Settings', 'Security', 'About'];

  constructor() { }

  ngOnInit() {
  }

}
