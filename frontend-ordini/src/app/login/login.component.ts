import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;

  user: User = new User();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('sumbit');
    this.loading = true;
    console.log('username: ' + this.user.username);
    console.log('password: ' + this.user.password);

    this.authService.login(this.user);
  }
}
