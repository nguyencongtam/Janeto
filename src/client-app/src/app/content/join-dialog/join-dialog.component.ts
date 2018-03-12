import { Component, OnInit,Inject, Input  } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuanAnService } from '../../providers/quan-an.service';
import { IQuan } from '../../models/IQuan';
// import { QuananComponent } from '../../content/quanan/quanan.component'
@Component({
  selector: 'app-join-dialog',
  templateUrl: './join-dialog.component.html',
  styleUrls: ['./join-dialog.component.scss']
})
export class JoinDialogComponent implements OnInit {
  quanAn: any ={};
  idQuanAn: String;
  Callback: Function;
  test: string ="hello"
  constructor(
    public thisDialogRef: MatDialogRef<JoinDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any,
    private _quanAnService : QuanAnService,
    // private QuananComponent :QuananComponent
) { }



  ngOnInit() {
  // this.Callback()
  //   // alert(this.quanAn.party.index)
  this.ngLoadJoinParty();
  }
  
  ngLoadJoinParty()
  {
    this._quanAnService.nhanIdQuanAn.subscribe(idQuanAn => this.idQuanAn = idQuanAn);
    console.log("join:");
    console.log(this.idQuanAn);
    // var id = "5a978e644a2eab0a4cfc3ecd";
    this._quanAnService.getPartyQuanAn(this.idQuanAn);
    this._quanAnService.partyQuan.subscribe(data => {
      this.quanAn = data;
      // for(let quan of this.quanAn.party)
      // {
      //   console.log("checkpoint 2: ");
      //   console.log(quan.leader);
      //   this.Parties[quan.index] = quan.leader;
      // }
console.log(this.quanAn.party);

      return this.quanAn;
      
    })
    // this._quanAnService.getPartyQuanAn();
    // this._quanAnService.getAllQuan();
    
    // this._quanAnService.partyQuan.subscribe(quanAn => this.quanAn = quanAn);
    // console.log("checkpoint join:");
    
    // console.log(this.quanAn);
  }

  onCloseConfirm() {
    this.thisDialogRef.close('confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('cancel');
  }
}
