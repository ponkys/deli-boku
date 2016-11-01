import { Component, OnInit } from '@angular/core';

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    icon?: string;
}

@Component({
  selector: 'app-basic-location-map',
  templateUrl: './basic-location-map.component.html',
  styleUrls: ['./basic-location-map.component.css']
})
export class BasicLocationMapComponent implements OnInit {

  zoom: number = 15;
  lat: number = 47.4894465;
  lng: number = 19.0624207;

  

  constructor() { }

  ngOnInit() {
  }

  markers: marker[] = [
        {
          lat: 47.4894465,
          lng: 19.0624207,
          draggable: false
        }
    ];

}
