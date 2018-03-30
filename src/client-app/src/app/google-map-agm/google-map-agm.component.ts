import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuanAnService } from '../providers/quan-an.service'
import { forEach } from '@angular/router/src/utils/collection';
import {MyDialogComponent} from '../content/my-dialog/my-dialog.component';
import { JoinDialogComponent } from '../content/join-dialog/join-dialog.component';


@Component({
  selector: 'app-google-map-agm',
  templateUrl: './google-map-agm.component.html',
  styleUrls: ['./google-map-agm.component.scss']
})
export class GoogleMapAgmComponent implements OnInit {
lat: number;
lng: number;
zoom: number;
quanAn: any ={};
quanan: String;

  constructor(
    public dialog: MatDialog,
    private _quanAnService: QuanAnService,
  ) { }

  ngOnInit() {
    this.getQuanAn();
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


getQuanAn() {
  this._quanAnService.getDataQuan();
  this._quanAnService.getAllQuan.subscribe((data) => {
    this.quanAn = data;
    console.log(data);
    return this.quanAn;
  })
}

openDialog() {
  let dialogRef = this.dialog.open(MyDialogComponent, {
    width: '600px',
  });
}


openJoinDialog(idQuanAn){
  this._quanAnService.shareIdQuanAn(idQuanAn); //gọi service shareIdQuanAn và gửi id của quán
  console.log(idQuanAn);
    let dialogRef = this.dialog.open(JoinDialogComponent, {
      width: '600px',
    });
  }

}
