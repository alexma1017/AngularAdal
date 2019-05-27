import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userInfo ="";
  roles=[];
  constructor(private adal: AdalService) { }

  ngOnInit() {
    this.userInfo = this.adal.userInfo.userName;
    this.roles=this.adal.userInfo.profile.roles;
  }

}
