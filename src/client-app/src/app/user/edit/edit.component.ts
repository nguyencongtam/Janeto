import { Component, OnInit } from '@angular/core';
import { GetprofileService } from '../../providers/getprofile.service';
import { NgForm  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  dataUser: any[];
  sex: boolean;
  userId: string;
  disable: Boolean = false; // false: hide, true: show

  constructor(private _getprofile: GetprofileService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getProfile();

    this._getprofile.Disable.subscribe(value => {
      this.disable = value;
    });
  }

  getProfile() {
    this._getprofile.getProfile().then(data => {
      this.dataUser = data;
      this.userId = data._id;
      if (data.Sex === 'male') {
        this.sex = true;
      } else {
        this.sex = false;
       }
    });
  }

  update(form: NgForm) {
    console.log(form.value);
    this._getprofile.update(this.userId, form.value).then(data => {
      this.toastr.success('Update Info succsessfully', '', { positionClass: 'toast-bottom-right' });
    });
  }

  cancel() {
    this._getprofile.setDisable(false);
  }
}
