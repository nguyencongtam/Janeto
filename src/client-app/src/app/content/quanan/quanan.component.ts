import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MyDialogComponent} from '../../content/my-dialog/my-dialog.component';
import { QuanAnService } from '../../providers/quan-an.service';
// import {MyDialogComponent} from '../my-dialog/my-dialog.component'
import { JoinDialogComponent } from '../join-dialog/join-dialog.component';

@Component({
  selector: 'app-quanan',
  templateUrl: './quanan.component.html',
  styleUrls: ['./quanan.component.scss']
})
export class QuananComponent implements OnInit {
  quanAn: any = {};
  party: any ={};
  constructor(public dialog: MatDialog, private _quananService: QuanAnService) {
  }

  ngOnInit() {
    this._quananService.getDataQuan();
    this._quananService.getAllQuan.subscribe(data => {
      this.quanAn = data;
      console.log("quanan:");
      console.log(this.quanAn);
      return this.quanAn;
    });
  }

  openDialog() {
    //console.log("dialog");
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
     // data: 'this is data'
    });
  }


  openJoinDialog(idQuanAn){
    this._quananService.shareIdQuanAn(idQuanAn);
    console.log(idQuanAn);
    
    // this.ngLoadJoinParty();
      console.log("join dialog");
      let dialogRef = this.dialog.open(JoinDialogComponent, {
        width: '600px',
      });
    }

    ngLoadJoinParty(){
      var id = "5a978e644a2eab0a4cfc3ecd";
      this._quananService.getPartyQuanAn(id);
      this._quananService.partyQuan.subscribe(data => {
        this.party = data;
        console.log("checkpoint 1: ");
        console.log(this.party.party);
        return this.party;
      });
      
    }

      // this.ngLoadJoinParty();
      
      // 
      // console.log(idQuanAn);
  }





