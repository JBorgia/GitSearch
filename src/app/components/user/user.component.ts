import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { User } from '../../services/models/github.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  keys: any[];
  imgUrl: string;
  avatarUrl = 'https://avatars0.githubusercontent.com/u/';

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.user);
    this.imgUrl = `${this.avatarUrl}${this.user['id']}`;
  }
}
