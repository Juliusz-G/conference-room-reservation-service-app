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
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    ConferenceRoomComponent,
    ReservationComponent,
    OrganisationAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Configures the dependency injector for HttpClient
    ReactiveFormsModule
  ],
  providers: [OrganisationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
