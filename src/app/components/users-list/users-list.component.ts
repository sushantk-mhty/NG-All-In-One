import { Component, OnInit, inject } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  //public users:Users[]=[] as Users[];
  public users: Users[] | undefined;
  public errorMessage:string | undefined='';
  public show:boolean=false;
  private usersService = inject(UsersService);
  constructor() {}

  ngOnInit(): void {}

  public getUsersData() {
    this.show=!this.show;
    this.usersService.getUsers().subscribe({
      next: (response: Users[]) => {
        this.users = response;
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    });
  }
}
