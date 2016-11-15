import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-watch-free',
  templateUrl: './watch-free.component.html',
  styleUrls: ['./watch-free.component.css']
})
export class WatchFreeComponent implements OnInit {
  public trustedUrl: any;

  constructor(private sanitizer: DomSanitizer) {

    this.trustedUrl = sanitizer.bypassSecurityTrustResourceUrl("https://player.vimeo.com/video/40915360");
  }

  ngOnInit() {

  }

}
