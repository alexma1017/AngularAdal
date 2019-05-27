import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alexangularAdal';

  private adalConfig = {
    tenant: '07d49e41-0c9d-4d94-b0f9-17e89a47fdd9',
    clientId: '142a8de3-c2ae-441d-923b-94c38724038b',
    redirectUri: "http://localhost:4200/start",
    postLogoutRedirectUri: "http://localhost:4200/logout",
    endpoints: {
      //alex later
      "[HOME_URL_WEB_API]": "[HOME_WEB_API_GUID]"
    }
  }

  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfig);
  }
 
  signOut(): void {
    this.adal.logOut();
  }
}
