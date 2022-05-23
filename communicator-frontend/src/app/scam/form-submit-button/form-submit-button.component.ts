import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-submit-button',
  templateUrl: './form-submit-button.component.html',
  styleUrls: ['./form-submit-button.component.scss']
})
export class FormSubmitButtonComponent implements OnInit {

  @Input()
  label: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
