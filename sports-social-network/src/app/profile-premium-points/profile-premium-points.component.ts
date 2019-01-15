import { Component, OnInit } from '@angular/core';
import { ScoredActiviesService } from '../services/scored-activies.service';
import { ScoredActivity } from '../models/scored-activity';

@Component({
  selector: 'app-profile-premium-points',
  templateUrl: './profile-premium-points.component.html',
  styleUrls: ['./profile-premium-points.component.scss']
})
export class ProfilePremiumPointsComponent implements OnInit {

  scoredActivities: ScoredActivity[];
  selectedScoredActivity: ScoredActivity;

  constructor(
    private scoredActivitiesService: ScoredActiviesService
  ) { }

  ngOnInit() {
    this.scoredActivitiesService.getUserScoredActivities()
      .subscribe((scoredActivities: ScoredActivity[]) => {
        this.scoredActivities = scoredActivities;
      });
  }

  selectScoredActivity(scoredActivity: ScoredActivity): void {
    this.selectedScoredActivity = scoredActivity;
  }

}
