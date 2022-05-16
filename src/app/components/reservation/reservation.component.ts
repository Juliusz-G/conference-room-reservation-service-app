import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  public reservations: Reservation[] | undefined;
//   public reservation: Reservation | null;
//   public reservation: Reservation;

  constructor(private reservationService: ReservationService, private router: Router) { }

  ngOnInit() {
    this.getReservations();
    console.log(this.reservations)
  }

  public getReservations(): void {
    this.reservationService.getReservations().subscribe(
        (response: Reservation[]) => {
          this.reservations = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }

  public deleteReservation(reservationId: number): void {
      this.reservationService.deleteReservation(reservationId).subscribe(
          (response: void) => {
            this.getReservations();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
      );
  }

  public addReservation(addForm: NgForm): void {
      document.getElementById('add-reservation-form')?.click();
      this.reservationService.addReservation(addForm.value).subscribe(
           (response: Reservation) => {
             console.log(response);
             this.getReservations();
             addForm.reset();
           },
           (error: HttpErrorResponse) => {
             alert(error.message);
             addForm.reset();
           }
      );
  }

  onSubmit(){
  }

  updateReservation(id: number){
      this.router.navigate(['update-reservation', id]);
    }

//   public updateReservation(reservation: Reservation): void {
//     this.reservationService.updateReservation(reservation).subscribe(
//       (response: Reservation) => {
//         console.log(response);
//         this.getReservations();
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }


}
