
import { Component, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;
  constructor() { }

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
    var location = {lat: latitude, lng: longitude};
    var mapProp = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      this.marker = new google.maps.Marker({
        position: location,       
        map: this.map
      });
  }

}
