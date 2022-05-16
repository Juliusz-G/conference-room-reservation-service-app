import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReservationComponent } from './components/reservation/add-reservation/add-reservation.component';

const routes: Routes = [
  {path: 'add-reservation', component: AddReservationComponent},
  {path: '', redirectTo: 'app-root', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
