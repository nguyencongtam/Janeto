
import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  locationUser: google.maps.Marker;
  locationRestaurant: google.maps.Marker;
  constructor() { 
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ngLocationUser(position.coords.latitude, position.coords.longitude);
      });
    }
    else {
      alert("Trình duyệt này không hỗ trợ");
    }
  }

  ngLocationUser(latitude, longitude) {
    var location = [
      {lat: 10.9946915, lng: 106.661486},
      {lat: 10.9934961, lng: 106.6615826},
      {lat: 10.9935119, lng: 106.6594851}
    ];
    var mapProp = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      this.locationUser = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},       
        map: this.map
      });
      for(var i=0;i<location.length;i++)
      {
        this.locationRestaurant = new google.maps.Marker({
          position: location[i],
          map: this.map       
        });
      }
      
  }

  

}
