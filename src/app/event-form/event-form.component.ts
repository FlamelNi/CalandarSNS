import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Event } from '../dataStructure/dataStructure'

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  title = "Event Form";

  someDetail: String | null = null;
  currentEvent: Event = new Event('');
  testName: String = "";


  constructor(public modalRef: MdbModalRef<Component>) {}

}

