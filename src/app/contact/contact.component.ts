import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 email1 = "sumairafarooq8@gmail.com";
 email2 = "summifarooq8@gmail.com";
 options = {
  layers: [
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    })
  ],
  zoom: 50,
  center: L.latLng([34.08664103354592, 74.79179780107764]) // Example coordinates
};

 
}
