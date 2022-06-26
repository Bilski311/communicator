import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.scss']
})
export class ChatListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    ChatListItemComponent
  ],
  exports: [
    ChatListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatListItemModule { }
