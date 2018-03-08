import { Component, OnInit,Inject  } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-join-dialog',
  templateUrl: './join-dialog.component.html',
  styleUrls: ['./join-dialog.component.scss']
})
export class JoinDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<JoinDialogComponent>, @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit() {
  }
  onCloseConfirm() {
    this.thisDialogRef.close('confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('cancel');
  }
}
