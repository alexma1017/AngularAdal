import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdalService, AdalInterceptor } from 'adal-angular4';
import { AuthcallbackComponent } from './callback/authcallback/authcallback.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    AuthcallbackComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdalService, { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
