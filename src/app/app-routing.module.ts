import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './components/update-reservation/update-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ConferenceRoomComponent } from './components/conference-room/conference-room.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { OrganisationAddComponent } from './components/organisation-add/organisation-add.component';
import { ConferenceRoomCreateComponent } from './components/conference-room-create/conference-room-create.component';
import { ConferenceRoomEditComponent } from './components/conference-room-edit/conference-room-edit.component';
import { ConferenceRoomViewComponent } from './components/conference-room-view/conference-room-view.component';
import { OrganisationEditComponent } from './components/organisation-edit/organisation-edit.component';
import { OrganisationViewComponent } from './components/organisation-view/organisation-view.component';
import { ReservationViewComponent } from './components/reservation-view/reservation-view.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: 'conference-rooms', component: ConferenceRoomComponent},
  {path: 'conference-room/:conferenceRoomId/edit', component: ConferenceRoomEditComponent},
  {path: 'conference-room/create', component: ConferenceRoomCreateComponent},
  {path: 'conference-room/:conferenceRoomId/view', component: ConferenceRoomViewComponent},
  {path: 'organisations', component: OrganisationComponent},
  {path: 'organisation/create', component: OrganisationAddComponent},
  {path: 'organisation/:organisationId/edit', component: OrganisationEditComponent},
  {path: 'organisation/:organisationId/view', component: OrganisationViewComponent},
  {path: 'reservations', component: ReservationComponent},
  {path: 'reservation/create', component: AddReservationComponent},
  {path: 'reservation/:reservationId/edit', component: UpdateReservationComponent},
  {path: 'reservation/:reservationId/view', component: ReservationViewComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
