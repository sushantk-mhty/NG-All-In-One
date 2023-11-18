import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  private contactService = inject(ContactService);
  public contacts: Contact[] | undefined;
  public errorMessage: string | undefined = '';

  @Output() sendContact=new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.getContactsData();
  }
  public getContactsData() {
    this.contactService.getAllContacts().subscribe({
      next: (response: Contact[]) => {
        this.contacts = response;
        console.table(response);
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
  public selectContact(contact:Contact){
    this.sendContact.emit(contact);
  }
}
