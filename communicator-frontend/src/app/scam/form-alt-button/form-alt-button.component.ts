import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-alt-button',
  templateUrl: './form-alt-button.component.html',
  styleUrls: ['./form-alt-button.component.scss']
})
export class FormAltButtonComponent implements OnInit {

  @Input()
  label: String = '';

  @Output()
  actionRequest: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick($event: MouseEvent) {
    this.actionRequest.emit($event);
  }

}
