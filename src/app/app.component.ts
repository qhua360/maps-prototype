import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maps-prototype';
  center = {lat: 43.6489, lng: -79.3809};
  options: google.maps.MapOptions= {
    center: this.center,
    zoom: 16
  };
  markerPositions: google.maps.LatLngLiteral[] = [this.center];

  ngOnInit() {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: this.center,
        zoom: 14,
      }
    );
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano") as HTMLElement,
      {
        position: this.center,
        pov: {
          heading: 34,
          pitch: 10,
        },
      }
    );
    map.setStreetView(panorama);
  };
}
