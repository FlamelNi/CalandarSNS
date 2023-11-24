import { Component } from '@angular/core';
// import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { initializeApp } from '@angular/fire/app';
// import { getDatabase, ref, push, onValue } from '@angular/fire/database';
import { environment } from 'src/environments/environments';


// const appSetting = {
//     databaseURL: 'calendarsns-59f23.firebaseapp.com'
// }
// const fbApp = initializeApp(appSetting);
// const fbDatabase = getDatabase(fbApp);

// const fbEvents = ref(fbDatabase, 'Events');

// onValue(fbEvents, function(snapshot) {
//   console.log(snapshot);
// })


// https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#10


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private dialog: MatDialog, private store: AngularFirestore) {}
  // todo = this.store.collection('todo').valueChanges({ idField: 'id' }) as Observable<String[]>;

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
  // constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  CallSomeLogic(){
    // this.changeCalandarHeight();
  }

}

