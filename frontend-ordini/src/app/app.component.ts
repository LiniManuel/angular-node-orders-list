import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend-ordini';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.userSubject.subscribe((token) => {
      console.log(token);
      console.log('navigate to root');
      if (token) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
