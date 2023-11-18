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
  private usersService = inject(UsersService);
  constructor() {}

  ngOnInit(): void {}
  public getUsersData() {
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
