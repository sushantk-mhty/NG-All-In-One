import { Component } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.scss'],
})
export class ShowPasswordComponent {
  public inputType: string = 'password';
  
  public changeInputType(event: any): void {
    this.inputType = event.target.checked ? 'text' : 'password';
  }
}
