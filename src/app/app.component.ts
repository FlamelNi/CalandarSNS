import { Component } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'test';
  
  // calendarOptions: CalendarOptions = {
  //   height: this.calculateCalandarHeight(),
  //   initialView: 'timeGridWeek',
  //   plugins: [timeGridPlugin],
  //   headerToolbar: {
  //     left: 'today,prev,next timeGridWeek,timeGridDay',
  //     center: 'title',
  //     right: ''
  //   }
  // };

  // calculateCalandarHeight(){
  //   return parent.innerHeight*.9;
  // }
  // changeCalandarHeight(){
  //   this.calendarOptions.height = this.calculateCalandarHeight();
  // }
  CallSomeLogic(){
    // this.changeCalandarHeight();
  }

}

