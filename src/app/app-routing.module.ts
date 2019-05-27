import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import {AboutComponent} from './about/about.component';
import { AdalGuard } from 'adal-angular4';
import { AuthcallbackComponent } from './callback/authcallback/authcallback.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [

  { path: 'start', component: StartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
{ path: '**', redirectTo: '/start' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
