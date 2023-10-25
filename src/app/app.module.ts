import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { FullCalendarModule } from '@fullcalendar/angular';
import { MainPageComponent } from './main-page/main-page.component';
import { CalandarViewComponent } from './calandar-view/calandar-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CalandarViewComponent,
    NotFoundComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }