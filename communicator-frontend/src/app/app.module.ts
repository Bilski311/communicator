import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './scam/login/login.component';
import {RegisterComponent} from './scam/register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {WelcomeTitleComponent} from './scam/welcome-title/welcome-title.component';
import {UsernameInputModule} from "./scam/username-input/username-input.module";
import {EmailInputModule} from "./scam/email-input/email-input.module";
import {PasswordInputModule} from "./scam/password-input/password-input.module";
import {FormSubmitButtonModule} from "./scam/form-submit-button/form-submit-button.module";
import {FormAltButtonModule} from "./scam/form-alt-button/form-alt-button.module";
import {FormContainerModule} from "./scam/form-container/form-container.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    WelcomeTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsernameInputModule,
    ReactiveFormsModule,
    EmailInputModule,
    PasswordInputModule,
    FormSubmitButtonModule,
    FormAltButtonModule,
    FormContainerModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
