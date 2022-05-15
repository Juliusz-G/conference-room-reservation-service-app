import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrganisationComponent} from './components/organisation/organisation.component';
import {HttpClientModule} from "@angular/common/http";
import {OrganisationService} from "./services/organisation.service";
import { ConferenceRoomComponent } from './components/conference-room/conference-room.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    ConferenceRoomComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Configures the dependency injector for HttpClient
  ],
  providers: [OrganisationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
