import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  reservationId: number;
  form: FormGroup;

  constructor(public reservationService: ReservationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.params['reservationId'];
    console.log(this.reservationId);
    this.reservationService.getReservationById(this.reservationId).subscribe((data: Reservation) => {
      this.form.patchValue(data);

    });

    this.form = new FormGroup({
      conferenceRoom: new FormControl(''),
      startDateTime: new FormControl('', [Validators.required]),
      endDateTime: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.reservationService.updateReservation(this.reservationId, this.form.value).subscribe(() => {
      console.log('Reservation updated successfully!');
      this.router.navigateByUrl('/reservations').then(() => confirm("Reservation updated successfully!"));
    })
  }
}
