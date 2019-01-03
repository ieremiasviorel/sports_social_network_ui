import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-profile-preferences',
  templateUrl: './profile-preferences.component.html',
  styleUrls: ['./profile-preferences.component.scss']
})
export class ProfilePreferencesComponent implements OnInit {

  SPORTS_LIST: string[] = ['Tennis', 'Running', 'Climbing', 'Badminton', 'Yoga', 'Volleyball'];
  FILTERED_SPORTS_LIST: Observable<string[]>;

  userPreferredSports: string[] = ['Football', 'Basketball'];

  menuOptions: string[] = ['Preferences', 'Settings', 'Security', 'About'];

  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('PreferenceInput') preferenceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  preferenceControl = new FormControl();

  startTimeAsDate: Date;
  startTimeAsString: string;
  endTimeAsDate: Date;
  endTimeAsString: string;

  constructor() {
    this.FILTERED_SPORTS_LIST = this.preferenceControl.valueChanges.pipe(
      startWith(null),
      map((sport: string | null) => sport ? this._filter(sport) : this.SPORTS_LIST));

    this.startTimeAsDate = new Date();
    this.startTimeAsDate.setHours(14, 0, 0);
    this.startTimeAsString = this.startTimeAsDate.toTimeString().slice(0, 5);

    this.endTimeAsDate = new Date();
    this.endTimeAsDate.setHours(20, 0, 0);
    this.endTimeAsString = this.endTimeAsDate.toTimeString().slice(0, 5);
  }

  ngOnInit() { }

  removePreferredSport(sportToRemove: string): void {
    this.userPreferredSports = this.userPreferredSports
      .filter(sportPreference => sportPreference !== sportToRemove);
    this.SPORTS_LIST.push(sportToRemove);
    this.preferenceControl.setValue('');
  }

  addPreferredSport(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.userPreferredSports.push(value.trim());
        this.SPORTS_LIST = this.SPORTS_LIST.filter(s => s !== value);
        this.preferenceControl.setValue('');
      }

      if (input) {
        input.value = '';
      }
    }
  }

  selectedPreferredSport(event: MatAutocompleteSelectedEvent): void {
    const sportToAdd = event.option.value;
    this.userPreferredSports.push(sportToAdd);
    this.preferenceInput.nativeElement.value = '';
    this.SPORTS_LIST = this.SPORTS_LIST.filter(s => s !== sportToAdd);
    this.preferenceControl.setValue('');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.SPORTS_LIST.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
  }

  decrementTimeInput(inputTidentifier: number): void {
    if (inputTidentifier === 0) {
      this.startTimeAsDate.setHours(this.startTimeAsDate.getHours() - 1);
      this.startTimeAsString = this.startTimeAsDate.toTimeString().slice(0, 5);
    }

    if (inputTidentifier === 1) {
      this.endTimeAsDate.setHours(this.endTimeAsDate.getHours() - 1);
      this.endTimeAsString = this.endTimeAsDate.toTimeString().slice(0, 5);
    }
  }

  incrementTimeInput(inputTidentifier: number): void {
    if (inputTidentifier === 0) {
      this.startTimeAsDate.setHours(this.startTimeAsDate.getHours() + 1);
      this.startTimeAsString = this.startTimeAsDate.toTimeString().slice(0, 5);
    }

    if (inputTidentifier === 1) {
      this.endTimeAsDate.setHours(this.endTimeAsDate.getHours() + 1);
      this.endTimeAsString = this.endTimeAsDate.toTimeString().slice(0, 5);
    }
  }
}
