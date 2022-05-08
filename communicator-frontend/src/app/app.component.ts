import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'communicator-frontend';
  constructor(private http: HttpClient) {};
  xD = ""
  xDD = this.http.get('http://localhost:8080/xD', { responseType: 'text' }).subscribe(message => this.xD = message);

}
