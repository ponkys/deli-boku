import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable }   from 'rxjs/Observable';
import '../rxjs-operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showDashboard: boolean = true;

  constructor(public authService: AuthService) {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.showDashboard = !this.showDashboard
        //console.log(this.showDashboard)
      } 
    });
  }

  ngOnInit() {
  }

}
