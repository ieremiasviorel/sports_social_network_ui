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

  SPORTS_LIST: string[] = ['Football', 'Tennis', 'Basketball', 'Running'];
  FILTERED_SPORTS_LIST: Observable<string[]>;

  userPreferredSports: string[] = ['Football', 'Basketball'];

  menuOptions: string[] = ['Preferences', 'Settings', 'Security', 'About'];

  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('PreferenceInput') preferenceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  preferenceControl = new FormControl();

  constructor() {
    this.FILTERED_SPORTS_LIST = this.preferenceControl.valueChanges.pipe(
      startWith(null),
      map((sport: string | null) => sport ? this._filter(sport) : this.SPORTS_LIST));
  }

  ngOnInit() {
  }

  removePreferredSport(sportToRemove: string): void {
    this.userPreferredSports = this.userPreferredSports.filter(sportPreference => sportPreference !== sportToRemove);
  }

  addPreferredSport(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.userPreferredSports.push(value.trim());
      }

      if (input) {
        input.value = '';
      }
    }
  }

  selectedPreferredSport(event: MatAutocompleteSelectedEvent): void {
    this.userPreferredSports.push(event.option.viewValue);
    this.preferenceInput.nativeElement.value = '';
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.SPORTS_LIST.filter(sport => sport.toLowerCase().indexOf(filterValue) === 0);
  }
}
