import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsernameInputComponent} from './username-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UsernameInputComponent
  ],
  exports: [
    UsernameInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class UsernameInputModule {
}
