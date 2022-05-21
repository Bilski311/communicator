import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordInputComponent} from './password-input.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PasswordInputComponent
  ],
  exports: [
    PasswordInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PasswordInputModule {
}
