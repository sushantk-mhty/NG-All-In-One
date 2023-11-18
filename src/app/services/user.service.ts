import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = {
    name: '',
    email: '',
    password: '',
    designation: '',
    bio: '',
    terms: false,
  };

  constructor() { }

  public getUser():User{
    return this.user;
  }
}
