import { Component, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventFormComponent } from '../event-form/event-form.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
// import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-calandar-view',
  templateUrl: './calandar-view.component.html',
  styleUrls: ['./calandar-view.component.css']
})
export class CalandarViewComponent {
  @Input() viewType!: String;
  title = 'test';

  calendarOptions: CalendarOptions = {
    height: this.calculateCalandarHeight(),
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin],
    headerToolbar: {
      left: 'today,prev,next timeGridWeek,timeGridDay',
      center: 'title',
      right: ''
    }
  };

  calculateCalandarHeight() {
    return parent.innerHeight*.9;
  }
  changeCalandarHeight() {
    this.calendarOptions.height = this.calculateCalandarHeight();
  }

  modalRef: MdbModalRef<EventFormComponent> | null = null;
  constructor(private modalService: MdbModalService) {}

  openEventForm() {
    this.modalRef = this.modalService.open(EventFormComponent, {
      data: {
        someDetail: "tester detail"
      },
    });
    this.modalRef.onClose.subscribe((message:any) => {
      this.applyFormChange(message);
    });
  }

  applyFormChange(message: any) {
    
  }

  callSomeLogic() {
    // console.log(this.viewType);
  }

}
