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
  }

  ngOnInit() {
  }

}
