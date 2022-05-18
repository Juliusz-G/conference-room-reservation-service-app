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
      console.log('Reservation deleted successfully!');
    })
  }
}