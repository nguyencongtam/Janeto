import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component'
import { JoinDialogComponent } from '../join-dialog/join-dialog.component';

@Component({
  selector: 'app-quanan',
  templateUrl: './quanan.component.html',
  styleUrls: ['./quanan.component.scss']
})
export class QuananComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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

