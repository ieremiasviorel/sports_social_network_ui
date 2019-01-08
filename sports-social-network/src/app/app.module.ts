import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

import { AgmCoreModule } from '@agm/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatInputModule,
  MatCheckboxModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDividerModule,
  MatRadioModule,
  MatDialogModule
} from '@angular/material';

import { GroupsComponent } from './groups/groups.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventOperationsComponent } from './event-operations/event-operations.component';
import { EventJoinComponent } from './event-join/event-join.component';
import { EventRemindersComponent } from './event-reminders/event-reminders.component';
import { ProfilePreferencesComponent } from './profile-preferences/profile-preferences.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { EventUserComponent } from './event-user/event-user.component';
import { JoinQuizzComponent } from './join-quizz/join-quizz.component';
import { QuizzDialogComponent } from './quizz-dialog/quizz-dialog.component';
import { EventsMainContainerComponent } from './events-main-container/events-main-container.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    HeaderComponent,
    LoginDialogComponent,
    GroupsComponent,
    GroupCreateComponent,
    EventCreateComponent,
    EventOperationsComponent,
    EventJoinComponent,
    EventRemindersComponent,
    ProfilePreferencesComponent,
    SideMenuComponent,
    EventUserComponent,
    JoinQuizzComponent,
    QuizzDialogComponent,
    EventsMainContainerComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    QuizzDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
    MatRadioModule,
    MatDialogModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY-Gnr-rkKapvYx1mWSi4ATh3oM33grV0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
