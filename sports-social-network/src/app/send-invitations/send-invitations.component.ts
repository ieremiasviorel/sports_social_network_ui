import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friend';
import { Observable } from 'rxjs';
import { FriendsService } from '../services/friends.service';

@Component({
  selector: 'app-send-invitations',
  templateUrl: './send-invitations.component.html',
  styleUrls: ['./send-invitations.component.scss']
})
export class SendInvitationsComponent implements OnInit {

  friends$: Observable<Friend[]>;
  constructor(private friendsService : FriendsService) { }

  ngOnInit() {
    this.friends$ = this.friendsService.getAllFriends()
  }

}
