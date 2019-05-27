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
    redirectUri: "http://localhost:4200/auth-callback",
    postLogoutRedirectUri: "http://localhost:4200/logout",
    endpoints: {
      "http://localhost:58434": "f4296393-ff04-4bf1-8445-c0b6c40aa1e5"
    }
  }

  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfig);
    
  }
 
  signOut(): void {
    this.adal.logOut();
  }
}
