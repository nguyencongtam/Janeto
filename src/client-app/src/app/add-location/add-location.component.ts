import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, CircleManager, MouseEvent } from '@agm/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
// import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html', 
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  setLat: number;
  setLng: number;
  // locationCenter: google.maps.Map;
  locationCenter: google.maps.Map;
  constructor(
  ) { }

  ngOnInit() {
    this.ngGetUserLocation();
  }

  private ngGetUserLocation()
  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
     });
   }
   this.zoom = 15;
  }

  mapClicked($event: MouseEvent) {
    this.setLat= $event.coords.lat;
    this.setLng= $event.coords.lng;
    console.log(this.setLat + " , " + this.setLng);
  }
}
