import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-user',
  templateUrl: './forms-user.component.html',
  styleUrls: ['./forms-user.component.scss']
})
export class FormsUserComponent {
  public username:string='';
  public useraddress:string='';
  updateInput(event:any):void{
   this.username=event.target.value;
  }
}
