import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/models/github.models';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.scss']
})
export class KeyvalueComponent implements OnInit {
  @Input() key;
  @Input() user: User;
  isUrl: boolean;

  constructor() { }

  ngOnInit() {
    this.isUrl = this.urlCheck();
  }

  urlCheck(): boolean {
    if (this.user[this.key] && typeof this.user[this.key] === 'string' && this.user[this.key].slice(0, 4) === 'http') {
      return true;
    }
    return false;
  }

}
