import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListItemModule } from '../chat-list-item/chat-list-item.component';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  listItems = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [
    ChatListComponent
  ],
  exports: [
    ChatListComponent
  ],
  imports: [
    CommonModule,
    ChatListItemModule
  ]
})
export class ChatListModule { }

