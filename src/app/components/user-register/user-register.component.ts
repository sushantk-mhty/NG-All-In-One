import { Component, OnInit, inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit{
  public fieldTextType !: boolean;
  public user: User = {} as User;

  private userService=inject(UserService);
  constructor(){}
  ngOnInit(): void {
    
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  public submitRegister():void{
    this.user=this.userService.getUser();
    console.table(this.user);
  }
}
