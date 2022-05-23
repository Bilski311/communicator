import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  isLoggedIn = false
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit($event: SubmitEvent): void {
    this.authService.login(this.username.value, this.password.value).subscribe(
      next => {
        this.tokenStorageService.saveToken(next.token);
        this.tokenStorageService.saveUser(next)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['dashboard']);
      }
    )
  }

  onCreateAccount($event: MouseEvent): void {
    this.router.navigate(['register']);
  }
}
