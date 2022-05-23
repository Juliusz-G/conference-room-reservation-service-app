import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/models/reservation';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConferenceRoomService } from 'src/app/services/conference-room.service';
import { ConferenceRoom } from 'src/app/models/conference-room';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  reservationId: number;
  form: FormGroup;
  conferenceRooms: ConferenceRoom[] = [];
  conferenceRoom: ConferenceRoom;

  constructor(public reservationService: ReservationService,
    private router: Router,
    private route: ActivatedRoute,
    private conferenceRoomService: ConferenceRoomService) { }

  ngOnInit(): void {
    this.getConferenceRooms();
    this.reservationId = this.route.snapshot.params['reservationId'];
    console.log(this.reservationId);
    this.reservationService.getReservationById(this.reservationId).subscribe((data: Reservation) => {
      this.form.patchValue(data);

    });

    this.form = new FormGroup({
      conferenceRoomName: new FormControl(null, [Validators.required]),
      startDateTime: new FormControl('', [Validators.required]),
      endDateTime: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('form value', this.form.value);
    console.log('reservation', this.reservationId);
    const selectedRoom = this.conferenceRooms.find(a => a.name === String(this.form.value.conferenceRoomName))
    // console.log(this.form.value);
    const selectedRoomId = selectedRoom?.id;
    // console.log('selected room Id', selectedRoomId)

    this.reservationService.updateReservation(this.reservationId, {startDateTime: this.form.value.startDateTime,
      endDateTime: this.form.value.endDateTime, conferenceRoomId: selectedRoomId}).subscribe(() => {
      console.log('Reservation updated successfully!');
      this.router.navigateByUrl('/reservations').then(() => alert("Reservation updated successfully!"));
    })
  }

  public getConferenceRooms(): void {
    this.conferenceRoomService.getConferenceRooms().subscribe((data: ConferenceRoom[]) => {
      this.conferenceRooms = data;
      console.log(this.conferenceRooms);
      });
  }

}
