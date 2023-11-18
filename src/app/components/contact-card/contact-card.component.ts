import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input() selectedContact:Contact={} as Contact;

  public isNotEmpty(){
    return Object.keys(this.selectedContact).length > 0;
  }
}
