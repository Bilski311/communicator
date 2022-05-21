import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  registerSuccessful = false;
  signUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.username.value, this.email.value, this.password.value).subscribe({
      next: (data) => {
        this.registerSuccessful = true;
        this.signUpFailed = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.signUpFailed = true;
        console.log('error: ');
        console.log(err.error);
      },
      complete: () => console.log('success')
    })
  }

}
