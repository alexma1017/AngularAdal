import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import {AboutComponent} from './about/about.component';
//import { AdalGuard } from 'adal-angular4';
import {AuthGuard} from './AuthGuard';
import { AuthcallbackComponent } from './callback/authcallback/authcallback.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  {path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'start', component: StartComponent},
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent },
  {path: 'auth-callback', component: AuthcallbackComponent },
{ path: '**', redirectTo: '/start' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
