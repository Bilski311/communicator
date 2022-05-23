import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  @Output()
  submitRequest: any = new EventEmitter<any>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit($event: any) {
    this.submitRequest.emit($event)
  }

}
