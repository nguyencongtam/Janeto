import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuanAnService } from './providers/quan-an.service'; 
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ContentComponent } from './content/content.component';
import { QuananComponent } from './content/quanan/quanan.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MyDialogComponent } from '../app/content/my-dialog/my-dialog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ToastrModule } from 'ngx-toastr';
import { JoinDialogComponent } from './content/join-dialog/join-dialog.component';
import { FriendComponent } from './friend/friend.component';
import { ListfriendsComponent } from './friend/listfriends/listfriends.component';
import { ProfileComponent } from './friend/profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { InfoComponent } from './content/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    ContentComponent,
    QuananComponent,
    MenuComponent,
    FooterComponent,
    MyDialogComponent,
    LoginComponent,
    SignupComponent,
    ViewHomeComponent,
    FriendComponent,
    ListfriendsComponent,
    ProfileComponent,
    WelcomeComponent,
    JoinDialogComponent,
    PageNotFoundComponent,
    InfoComponent   
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    [BrowserAnimationsModule],
    [AlertModule.forRoot()],
    NgbModule.forRoot(),
    MatDialogModule,
    ToastrModule.forRoot(),
    HttpModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  entryComponents: [
    MyDialogComponent,
    JoinDialogComponent
  ],
  providers: [QuanAnService],
  bootstrap: [AppComponent],
})
export class AppModule { }
