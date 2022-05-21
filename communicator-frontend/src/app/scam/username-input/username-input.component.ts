import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss']
})
export class UsernameInputComponent implements OnInit {
  @Input()
  username: FormControl = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

}
