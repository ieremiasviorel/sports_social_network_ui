import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from '../models/user';

const USERS: User[] = [
  { username: 'jdoe', password: 'pass', displayName: 'John Doe' }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.userLoginStatus = new Subject<boolean>();
  }

  userLoginStatus: Subject<boolean>;
  loggedInUser: User;

  authenticate(username: string, password: string): boolean {
    this.loggedInUser = USERS.find(user => user.username === username && user.password === password);
    if (this.loggedInUser) {
      this.userLoginStatus.next(true);
      return true;
    } else {
      this.userLoginStatus.next(false);
      return false;
    }
  }

  logout(username: string): boolean {
    this.loggedInUser = undefined;
    this.userLoginStatus.next(false);
    return true;
  }

  isUserLoggedIn(): boolean {
    return this.loggedInUser !== undefined;
  }

  getLoginStatus(): Subject<boolean> {
    return this.userLoginStatus;
  }

  getLoggedInUser(): User {
    return this.loggedInUser;
  }
}
