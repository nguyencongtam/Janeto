import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {GoogleMapComponent} from '../../google-map/google-map.component'
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private router:Router, private active:ActivatedRoute) { }

  ngOnInit() { 
  }
  
  
}
