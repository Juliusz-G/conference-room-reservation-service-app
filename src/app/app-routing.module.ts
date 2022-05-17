import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReservationComponent } from './components/reservation/add-reservation/add-reservation.component';
import {ConferenceRoomViewComponent} from "./components/conference-room-view/conference-room-view.component";
import {ConferenceRoomCreateComponent} from "./components/conference-room-create/conference-room-create.component";
import {ConferenceRoomEditComponent} from "./components/conference-room-edit/conference-room-edit.component";
import {ConferenceRoomComponent} from "./components/conference-room/conference-room.component";

const routes: Routes = [
  {path: 'add-reservation', component: AddReservationComponent},
  {path: 'conference-room', component: ConferenceRoomComponent},
  {path: 'conference-room/:conferenceRoomId/view', component: ConferenceRoomViewComponent},
  {path: 'conference-room/create', component: ConferenceRoomCreateComponent},
  {path: 'conference-room/:conferenceRoomId/edit', component: ConferenceRoomEditComponent},
  {path: '', redirectTo: 'app-root', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
