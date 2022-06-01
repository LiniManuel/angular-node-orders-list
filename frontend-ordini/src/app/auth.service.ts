import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ErrorMessageService } from './error-message.service';
import { Token } from './token';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubject: Subject<Token> = new Subject();

  constructor(
    private httpClient: HttpClient,
    private messageService: ErrorMessageService
  ) {}

  login(user: User) {
    console.log('login service');

    let credentials = {
      username: user.username,
      password: user.password,
    };

    this.httpClient
      .post('http://localhost:8080/spring-auth/auth', credentials)
      .subscribe(
        (response) => {
          console.log('ok');
          console.log(response);

          sessionStorage.setItem('auth_token', JSON.stringify(response));
          this.userSubject.next(response as Token);
        },
        (errorResponse) => {
          console.log('error');
          console.log(errorResponse);
          this.messageService.error(errorResponse.error.message);
        },
        () => {
          console.log('complete');
        }
      );
  }
}
