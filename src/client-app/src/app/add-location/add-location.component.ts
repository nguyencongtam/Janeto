import { Component, OnInit } from '@angular/core';
import { AgmCoreModule, CircleManager, MouseEvent } from '@agm/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { QuanAnService } from '../providers/quan-an.service'


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
  tenQuan: string="";
  setAddress: string="";
  dataAddress: any =[];
  content: string="";
  // locationCenter: google.maps.Map;
  locationCenter: google.maps.Map;
  selectedFile: File = null;
  constructor(
    private http: Http,
    private _quaAnService: QuanAnService,
    private toastr: ToastrService
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
    this.getDataQuan(this.setLat, this.setLng);
    console.log(this.setLat + " , " + this.setLng);
  }

  getDataQuan(lat, lng) {  
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng).toPromise().then(response => {
      this.dataAddress = response.json();
      this.setAddress = this.dataAddress.results[0].formatted_address;
      return this.setAddress;
    }).catch(err =>
      console.log(err)
      
      );
  }

  onFileSelected($event){
    this.selectedFile = <File>event.target.files[0].name;
    console.log(this.selectedFile);
  }

  ngPostDataQuanAn(tenQuan, setAddress, stime, etime, setLat, setLng){
    

    console.log(this.content);
    try{
      this._quaAnService.postQuanAn(tenQuan, stime, etime, setAddress, setLat, setLng, this.content).subscribe(res =>{
        this.toastr.success("Thêm quán ăn mới thành công")
      })
    }
    catch(err){
      this.toastr.error(err);
    }
  }
  

}
