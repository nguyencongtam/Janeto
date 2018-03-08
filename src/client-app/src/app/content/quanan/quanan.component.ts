import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';
import { QuanAnService } from '../../providers/quan-an.service';
import { IQuan } from '../../models/IQuan';
// import {MyDialogComponent} from '../my-dialog/my-dialog.component'
import { JoinDialogComponent } from '../join-dialog/join-dialog.component';

@Component({
  selector: 'app-quanan',
  templateUrl: './quanan.component.html',
  styleUrls: ['./quanan.component.scss']
})
export class QuananComponent implements OnInit {
  _QuanAn: IQuan;
  quanAn: any = {};

  constructor(public dialog: MatDialog, private _quananService: QuanAnService) {
  }

  ngOnInit() {
    this._quananService.getDataQuan();

    this._quananService.getAllQuan.subscribe(data => {
      this.quanAn = data;
      console.log(this.quanAn);
      return this.quanAn;
    });
  }

  openDialog() {
    //console.log("dialog");
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
     // data: 'this is data'
    })
  }
  openJoinDialog(){
      console.log("join dialog");
      let dialogRef = this.dialog.open(JoinDialogComponent, {
        width: '600px',
      })
  }
}

