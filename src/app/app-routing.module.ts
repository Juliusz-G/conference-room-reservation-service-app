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

const routes: Routes = [
  {path: 'conference-room', component: ConferenceRoomComponent},
  {path: 'conference-room/:conferenceRoomId/edit', component: ConferenceRoomEditComponent},
  {path: 'conference-room/create', component: ConferenceRoomCreateComponent},
  {path: 'conference-room/:conferenceRoomId/view', component: ConferenceRoomViewComponent},
  {path: 'ogranisation', component: OrganisationComponent},
  {path: 'ogranisation/create', component: OrganisationAddComponent},
  {path: 'ogranisation/:organisationId/edit', component: OrganisationEditComponent},
  {path: 'reservation', component: ReservationComponent},
  {path: 'reservation/create', component: AddReservationComponent},
  {path: 'reservation/:reservationId/edit', component: UpdateReservationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
