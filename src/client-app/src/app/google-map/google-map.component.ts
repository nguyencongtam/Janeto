
import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { QuanAnService } from '../providers/quan-an.service'
import { QuanAn } from '../models/QuanAn';
// import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observer } from 'rxjs/Observer';
import { Title } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapAgmComponent } from '../google-map-agm/google-map-agm.component'


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  tittle = 'hello';
  public _QuanAn: QuanAn;
  // mapProp;
  quanAn: any = {};
  map: google.maps.Map;
  locationUser: google.maps.Marker;
  // markerRestaurant;
  // infoWindow: google.maps.InfoWindow;
  constructor(
    private _quanAnService: QuanAnService,
    // private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.getQuanAn();
    // this.ToastrService.success('Thanh cong',this._dataService.getQuanAn());
    // var quanAn = new Object;
    // quanAn =  this._dataService.getQuanAn(); 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ngLocationUser(position.coords.latitude, position.coords.longitude);
        this.ngInfoWindow();
      });

    }
    else {
      alert("Trình duyệt này không hỗ trợ");
    }
    // this.ngInfoWindow();
  }

  getQuanAn() {
    this._quanAnService.getDataQuan();
    this._quanAnService.getAllQuan.subscribe((data) => {
      this.quanAn = data;
      console.log(data);
      return this.quanAn;
    })
  }


  ngLocationUser(latitude, longitude) {
    var mapProp = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.locationUser = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map
    });


  }

  ngInfoWindow() {
    var location = [];
    // var infoWindow = [];
    for (var i = 0; i < this.quanAn.length; i++) {
      location[i] = { lat: this.quanAn[i].Iat, lng: this.quanAn[i].Lng }
      console.log(location[i]);
    }

      // }
      // var locations = [
      //   [this.quanAn[0].lat,this.quanAn[0].lng, 'Point 1', '<p>This is Point 1</p>'],
      //   [this.quanAn[1].lat,this.quanAn[1].lng, 'Point 2', '<p>This is Point 2</p>'],
      //   [this.quanAn[2].lat,this.quanAn[2].lng, 'Point 3', '<p>This is Point 3</p>']
      // ];

      for (var i = 0; i < this.quanAn.length; i++) {
        var markerRestaurant = new google.maps.Marker({
          position: location[i],
          map: this.map,
          icon: ({
            url: 'http://www.hentiesbaytourism.com/wp-content/uploads/2016/06/restaurant_marker.png',
            scaledSize: new google.maps.Size(50, 50)
          })
        });
        var conentString = 'Hello';
        var infoWindow = new google.maps.InfoWindow({
          content: conentString
        });
        google.maps.event.addListener(markerRestaurant, 'click', function () {
          // infoWindow.setContent('{{this.QuanAn.lat}}')
          infoWindow.open(this.map, this);
        });

      }

    }
  }

