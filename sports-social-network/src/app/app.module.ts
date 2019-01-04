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

import {AgmCoreModule} from '@agm/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, MatSliderModule, MatFormFieldModule, MatSelect, MatSelectModule, MatDividerModule, MatRadioModule, MatListItem, MatListItemBase, MatDialogModule
} from '@angular/material';
import { GroupsComponent } from './groups/groups.component';
import { GroupCreateComponent } from './group-create/group-create.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventOperationsComponent } from './event-operations/event-operations.component';
import { EventJoinComponent } from './event-join/event-join.component';
import { JoinQuizzComponent } from './join-quizz/join-quizz.component';
import { QuizzDialogComponent } from './quizz-dialog/quizz-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    HeaderComponent,
    GroupsComponent,
    GroupCreateComponent,
    EventCreateComponent,
    EventOperationsComponent,
    EventJoinComponent,
    JoinQuizzComponent,
    QuizzDialogComponent
  ],
  entryComponents: [
    QuizzDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    ReactiveFormsModule,
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
