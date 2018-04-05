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

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile.name);

    // const fd: any = new FormData();
    // fd.append('file', this.selectedFile, this.selectedFile.name);
    // const URL = 'http://localhost:8081/upload/' + this.userId;
    // this.http.post(URL, fd).subscribe(res => {
    //   console.log(res);
    // });
  }

  ngPostDataQuanAn(tenQuan, setAddress, stime, etime, setLat, setLng){
    var slugUrl = this.slugify(tenQuan);
    var image = this.selectedFile.name;

    const fd: any = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    const URL = 'http://localhost:8081/upload'
    this.http.post(URL, fd).subscribe(res => {
      console.log(res);
    });

    console.log(this.content);
    try{
      this._quaAnService.postQuanAn(slugUrl, tenQuan, stime, etime, setAddress, setLat, setLng, this.content, image).subscribe(res =>{
        this.toastr.success("Thêm quán ăn mới thành công")
      })
    }
    catch(err){
      this.toastr.error(err);
    }
  }
  
  slugify(text)
  {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }


}
