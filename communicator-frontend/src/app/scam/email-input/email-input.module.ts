import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmailInputComponent} from './email-input.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmailInputComponent
  ],
  exports: [
    EmailInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EmailInputModule {
}
