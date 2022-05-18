import { Component, OnInit } from '@angular/core';
import { ReservationService }from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(public reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((data: Reservation[]) => {
      this.reservations = data;
      console.log(this.reservations);
    })
  }

  deleteReservation(reservationId: number) {
    this.reservationService.deleteReservation(reservationId).subscribe(() => {
      this.reservations = this.reservations.filter(item => item.id !== reservationId);
      console.log('Conference room deleted successfully!');
    })
  }

  // public getReservations(): void {
  //   this.reservationService.getReservations().subscribe(
  //       (response: Reservation[]) => {
  //         this.reservations = response;
  //       },
  //       (error: HttpErrorResponse) => {
  //         alert(error.message);
  //       }
  //   );
  // }

  // public deleteReservation(reservationId: number): void {
  //     this.reservationService.deleteReservation(reservationId).subscribe(
  //         (response: void) => {
  //           this.getReservations();
  //         },
  //         (error: HttpErrorResponse) => {
  //           alert(error.message);
  //         }
  //     );
  // }

  // public addReservation(addForm: NgForm): void {
  //     document.getElementById('add-reservation-form')?.click();
  //     this.reservationService.addReservation(addForm.value).subscribe(
  //          (response: Reservation) => {
  //            console.log(response);
  //            this.getReservations();
  //            addForm.reset();
  //          },
  //          (error: HttpErrorResponse) => {
  //            alert(error.message);
  //            addForm.reset();
  //          }
  //     );
  // }

  // updateReservation(id: number){
  //     this.router.navigate(['update-reservation', id]);
  //   }

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