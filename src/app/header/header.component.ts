import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable }   from 'rxjs/Observable';
import '../rxjs-operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  inLog;

  constructor(public authService: AuthService) {
    // this.authService.login().subscribe(() => {
      
    //     this.inLog = this.authService.isLoggedIn
  
    // });
    this.inLog = this.authService.isLoggedIn ;
    if (this.authService.login()) {
      this.inLog = this.authService.isLoggedIn
     }
  }

  showDashboard(userLoggedIn: boolean){
    this.inLog = userLoggedIn;
    console.log(this.inLog)
  }

  ngOnInit() {
  }

}
