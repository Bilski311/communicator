import { CommonModule } from '@angular/common';
import {Component, NgModule, OnInit} from '@angular/core';
import { ChatListComponent, ChatListModule } from '../scam/chat-list/chat-list.component';
import {TokenStorageService} from "../services/token-storage.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string = this.tokenStorageService.getUser().username;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChatListModule
  ]
})
export class DashboardModule { }
