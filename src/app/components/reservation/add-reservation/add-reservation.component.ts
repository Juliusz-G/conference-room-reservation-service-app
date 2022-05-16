import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { ReservationComponent } from 'src/app/components/reservation/reservation.component';


@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

//   reservation: Reservation = new Reservation();

  constructor(private reservationService: ReservationService, private router: Router,
      private reservationComponent: ReservationComponent) { }
//   private reservationService: ReservationService, private router: Router

  ngOnInit(): void {
  }

//   saveReservation() {
//       this.reservationService.addReservation(this.reservation).subscribe( data =>{
//         console.log(data);
//         this.goToReservationList();
//       },
//       error => console.log(error));
//   }

//   goToReservationList(){
//       this.router.navigate(['']);
//   }

  onSubmit(){
//       console.log(this.reservation);
//       this.saveReservation();
//       this.reservationService.addReservation(addForm: NgForm);
      this.router.navigate(['']);
  }

}
