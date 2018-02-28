import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ContentComponent } from './content/content.component';
import { QuananComponent } from './content/quanan/quanan.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MyDialogComponent } from '../app/content/my-dialog/my-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    ContentComponent,
    QuananComponent,
    MenuComponent,
    FooterComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    [BrowserAnimationsModule],
    [AlertModule.forRoot()],
    NgbModule.forRoot(),
    MatDialogModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
