import { Component, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-calandar-view',
  templateUrl: './calandar-view.component.html',
  styleUrls: ['./calandar-view.component.css']
})
export class CalandarViewComponent {
  @Input() viewType!: String;
  title = 'test';
  private modalService: NgbModal

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

  calculateCalandarHeight(){
    return parent.innerHeight*.9;
  }
  changeCalandarHeight(){
    this.calendarOptions.height = this.calculateCalandarHeight();
  }

  openEventForm() {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  callSomeLogic(){
    // console.log(this.viewType);
  }

}
