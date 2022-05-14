import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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

  constructor(private reservationService: ReservationService) { }

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





    public onAddReservation(addForm: NgForm): void {
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

//       public onOpenModal(reservation: Reservation, mode: string): void {
//             const container = document.getElementById('main-container');
//             const button = document.createElement('button');
//             button.type = 'button';
//             button.style.display = 'none';
//             button.setAttribute('data-toggle', 'modal');
//             if (mode === 'add') {
//               button.setAttribute('data-target', '#addReservationModal');
//             }
//       //       if (mode === 'edit') {
//       //         this.editEmployee = employee;
//       //         button.setAttribute('data-target', '#updateEmployeeModal');
//       //       }
//       //       if (mode === 'delete') {
//       //         this.deleteEmployee = employee;
//       //         button.setAttribute('data-target', '#deleteEmployeeModal');
//       //       }
//             container?.appendChild(button);
//             button.click();
//           }

}
