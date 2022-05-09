import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  }
  registerSuccessful = false;
  signUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {username, email, password} = this.form;
    this.authService.register(username, email, password).subscribe({
        next: (data) => {
          console.log(data);
          this.registerSuccessful = true;
          this.signUpFailed = false;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.signUpFailed = true;
        }
      }
    )
  }

}
