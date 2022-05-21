import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsernameInputModule} from "../username-input/username-input.module";
import {EmailInputModule} from "../email-input/email-input.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsernameInputModule,
    EmailInputModule
  ]
})
export class RegisterModule {
}
