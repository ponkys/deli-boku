import { Component, OnInit }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../auth.service';

import { User } from '../user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  message: string;
  users: User[];
  loading = false;
  error = '';

  constructor(private authService: AuthService, 
              private router: Router
              ) {
    this.setMessage();
  }

  ngOnInit(){
     this.authService.logout();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(userName: string, password: string) {
    this.message = 'Trying to log in ...';
    this.loading = true;
    if (!userName && !password) { return this.message="fill the forms"; }
    this.authService.login(userName, password)
      .subscribe(result => {
          if (result === true) {
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
            //Redirect the user
            this.router.navigate([redirect]);
          } else {
              this.error = 'Username or password is incorrect';
              this.loading = false;
          }
      });
    }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
  
}