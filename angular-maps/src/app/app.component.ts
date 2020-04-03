import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-maps';
  lat: number = 45.506738;
  lng: number = 9.190766;

  icon = {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }

  triangle : Array<Point> =
  [
    {lng: 9.1, lat:45.5},
    {lng: 9.0, lat:45.6},
    {lng: 9.0, lat:45.4}
  ]
}
