import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent {
  public isLoggedIn:boolean = false;
  public login(){
    this.isLoggedIn=true;
  }
  public logout(){
    this.isLoggedIn=false;
  }

}
