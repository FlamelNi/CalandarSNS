import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CalandarEvent } from '../dataStructure/calandarEvent'
import { ensureError } from '../dataStructure/dataStructure';
import { ErrorMsgs } from '../dataStructure/error';

let FORM_ERROR_MSG_STR = "Incorrect date or time was entered";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  EVENT_FORM_PLACEHOLDER = "My Event";
  
  title = "Event Form";

  formErrorMsg = "";

  someDetail: String | null = null;
  tempEvent: CalandarEvent = new CalandarEvent('');
  testName: String = "";

  attemptToSave(modalRef:MdbModalRef<EventFormComponent>, tempEvent:CalandarEvent) {
    var currentEvent = new CalandarEvent('');
    try {
      if (tempEvent.name == "") {
        tempEvent.name = this.EVENT_FORM_PLACEHOLDER;
      }
      currentEvent.set(tempEvent);
      modalRef.close(currentEvent);
    } catch (e) {
      // err = ensureError(err);
      // console.log(err);
      let err = e as Error;
      console.log(err);
      if (err.message == ErrorMsgs.eventFormDate) {
        this.formErrorMsg = FORM_ERROR_MSG_STR;
      } else {
        this.formErrorMsg = "";
      }
    }
  }

  constructor(public modalRef: MdbModalRef<EventFormComponent>) {}

}

