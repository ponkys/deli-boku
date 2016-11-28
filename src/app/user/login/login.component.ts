import { Component, OnInit }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../auth.service';

import { User } from '../user';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  users: User[];
  loading = false;
  error = '';

  constructor(private authService: AuthService, 
              private router: Router
              ) {
  }

  ngOnInit(){
     this.authService.logout();
  }

  login(userName: string, password: string) {
    this.loading = true;
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
  }
  
}