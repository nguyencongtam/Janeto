import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewHomeComponent } from './view-home/view-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FriendComponent } from './friend/friend.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeguardService } from './providers/homeguard.service';

const routes: Routes = [
  {path: 'home', component: ViewHomeComponent, canActivate: [HomeguardService]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'listfriend', component: FriendComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
