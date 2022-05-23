import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormSubmitButtonComponent} from './form-submit-button.component';


@NgModule({
  declarations: [
    FormSubmitButtonComponent
  ],
  exports: [
    FormSubmitButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormSubmitButtonModule {
}
