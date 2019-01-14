import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClient } from '@angular/common/http';

import { Event } from '../models/event';
import { RecentService } from '../services/recent.service';

@Component({
  selector: 'app-post-photos',
  templateUrl: './post-photos.component.html',
  styleUrls: ['./post-photos.component.scss']
})
export class PostPhotosComponent implements OnInit {

  public files: UploadFile[] = [];
  http: HttpClient;

  selectedEvent: Event;
  yourEvents: Event[];

  constructor(private recentService: RecentService) { }



  ngOnInit() {
    this.recentService.getRecentEvents().subscribe(recentEvents => {
      this.yourEvents = recentEvents;
    });
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
          const formData = new FormData();
          formData.append('logo', file, droppedFile.relativePath);
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  public onPostPhotos() {
    if (this.selectEvent) {
      // display photos
    }
  }

  selectEvent(event) {
    console.log(event);
    this.selectedEvent = event;
  }
}
