import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventJoinComponent } from './event-join/event-join.component';
import { JoinQuizzComponent } from './join-quizz/join-quizz.component';

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
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'group-create',
    component: GroupCreateComponent
  },
  {
    path: 'join-quizz',
    component: JoinQuizzComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
