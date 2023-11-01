import { Component, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventFormComponent } from '../event-form/event-form.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CalandarEvent } from '../dataStructure/calandarEvent';
import { ensureError } from '../dataStructure/dataStructure';
// import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-calandar-view',
  templateUrl: './calandar-view.component.html',
  styleUrls: ['./calandar-view.component.css']
})
export class CalandarViewComponent {
  @Input() viewType!: String;
  title = 'test';

  events: Set<CalandarEvent> = new Set();

  calendarOptions: CalendarOptions = {
    height: this.calculateCalandarHeight(),
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin],
    headerToolbar: {
      left: 'today,prev,next timeGridWeek,timeGridDay',
      center: 'title',
      right: ''
    },

    events: [],
  };

  calculateCalandarHeight() {
    return parent.innerHeight*.9;
  }
  changeCalandarHeight() {
    this.calendarOptions.height = this.calculateCalandarHeight();
  }

  modalRef: MdbModalRef<EventFormComponent> | null = null;
  constructor(private modalService: MdbModalService) {
    this.bootCalandarView();
  }

  openNewEventForm() {
    this.modalRef = this.modalService.open(EventFormComponent, {
      data: {
        someDetail: "tester detail"
      },
    });
    this.modalRef.onClose.subscribe((currEvent:CalandarEvent) => {
      if (currEvent == null) {
        return;
      }
      console.log('onClose with parameter was called!')
      console.log(currEvent);
      this.events.add(currEvent);
      this.updateCalandarView();
    });
    // this.modalRef.onClose.subscribe((message:any) => {
    //   currentEvent.set(message);
    //   this.events.add(currentEvent);
    //   this.updateCalandarView();
    // });
  }

  editEventForm() {
    // let's say currentEvent is pulled from events

    this.modalRef = this.modalService.open(EventFormComponent, {
      data: {
        someDetail: "tester detail"
      },
    });
    this.modalRef.onClose.subscribe((currEvent:CalandarEvent) => {
      // todo:
      // this.updateCalandarView();
    });
  }

  

  bootCalandarView(){
    this.updateCalandarView();
  }

  updateCalandarView() {
    console.log('calandar view is being updated');
    // this.addEvent
    this.calendarOptions['events'] = CalandarEvent.toFullCalandarEvents(this.events);
    console.log(this.calendarOptions);
    // TODO: 
    //display event on week view
  }

  callSomeLogic() {
    // console.log(this.viewType);
  }

}
