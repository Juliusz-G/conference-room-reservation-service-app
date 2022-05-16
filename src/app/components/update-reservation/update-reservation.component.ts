import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { ReservationComponent } from 'src/app/components/reservation/reservation.component';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  id!: number;
  reservation: Reservation = new Reservation();
  constructor(private reservationService: ReservationService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.reservationService.getReservationById(this.id).subscribe(data => {
      this.reservation = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.reservationService.updateReservation(this.reservation).subscribe(data => {
      this.goToReservationList();
    }, error => console.log(error));
  }

  goToReservationList(){
    this.router.navigate([''])
  }

}
