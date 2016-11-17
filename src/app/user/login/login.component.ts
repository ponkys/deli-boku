import { Component, Output, EventEmitter }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  message: string;

  @Output() userLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public authService: AuthService, 
              public router: Router
              ) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        this.userLoggedIn.emit(true);
        
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
  
}