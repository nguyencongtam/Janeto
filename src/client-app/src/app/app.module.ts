import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ContentComponent } from './content/content.component';
import { QuananComponent } from './content/quanan/quanan.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FriendComponent } from './friend/friend.component';
import { ListfriendsComponent } from './friend/listfriends/listfriends.component';
import { ProfileComponent } from './friend/profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    ContentComponent,
    QuananComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    FriendComponent,
    ListfriendsComponent,
    ProfileComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    [BrowserAnimationsModule],
    [AlertModule.forRoot()],
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
