import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private router: Router, public postsService: PostsService) { }

  ngOnInit() {
    this.posts$=this.postsService.getAllPosts();
  }

  goBack(){
    this.router.navigateByUrl('/groups');
  }
}
