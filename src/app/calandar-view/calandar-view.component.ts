import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-calandar-view',
  templateUrl: './calandar-view.component.html',
  styleUrls: ['./calandar-view.component.css']
})
export class CalandarViewComponent {
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

  calculateCalandarHeight(){
    return parent.innerHeight*.9;
  }
  changeCalandarHeight(){
    this.calendarOptions.height = this.calculateCalandarHeight();
  }
  CallSomeLogic(){
    // this.changeCalandarHeight();
  }

}
