import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.component.html',
  styleUrls: ['./reservation-view.component.css']
})
export class ReservationViewComponent implements OnInit {

  reservationId: number;
  reservation: Reservation;

  constructor(
    public reservationService: ReservationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.params['reservationId'];

    this.reservationService.getReservationById(this.reservationId).subscribe((data: Reservation) => {
      this.reservation = data;
    });
  }

}
