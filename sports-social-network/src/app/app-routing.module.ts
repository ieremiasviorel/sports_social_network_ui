import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventJoinComponent } from './event-join/event-join.component';
import { EventRemindersComponent} from './event-reminders/event-reminders.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'event-join',
    component: EventJoinComponent
  },
  {
    path: 'event-create',
    component: EventCreateComponent
  },
  {
    path: 'event-reminders',
    component: EventRemindersComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'group-create',
    component: GroupCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
