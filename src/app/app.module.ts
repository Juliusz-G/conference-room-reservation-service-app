import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrganisationComponent} from './components/organisation/organisation.component';
import {HttpClientModule} from "@angular/common/http";
import {OrganisationService} from "./services/organisation.service";
import { ConferenceRoomComponent } from './components/conference-room/conference-room.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { OrganisationAddComponent } from './components/organisation-add/organisation-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddReservationComponent} from "./components/add-reservation/add-reservation.component";
import { ConferenceRoomCreateComponent } from './components/conference-room-create/conference-room-create.component';
import { ConferenceRoomEditComponent } from './components/conference-room-edit/conference-room-edit.component';
import { ConferenceRoomViewComponent } from './components/conference-room-view/conference-room-view.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    ConferenceRoomComponent,
    ReservationComponent,
    OrganisationAddComponent,
    AddReservationComponent,
    ConferenceRoomCreateComponent,
    ConferenceRoomEditComponent,
    ConferenceRoomViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [OrganisationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
