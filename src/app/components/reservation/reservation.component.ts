import { Component, OnInit } from '@angular/core';
import { ReservationService }from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { HttpErrorResponse } from '@angular/common/http';

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
    if (confirm('Do you want to delete this reservations?')) {
      this.reservationService.deleteReservation(reservationId).subscribe(() => {
        this.reservations = this.reservations.filter(item => item.id !== reservationId);
        console.log('Reservation deleted successfully!');
      })
    }
  }

  public searchReservations(key: string): void {
    console.log(key);
    const results: Reservation[] = [];
    for (const reservation of this.reservations) {
      if (reservation.conferenceRoom.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || reservation.organisationName.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(reservation);
      }
    }
    this.reservations = results;
    if (results.length === 0 || !key) {
      this.getReservations();
    }
  }

  public getReservations(): void {
    this.reservationService.getReservations().subscribe((data: Reservation[]) => {
      this.reservations = data;
      console.log(this.reservations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}