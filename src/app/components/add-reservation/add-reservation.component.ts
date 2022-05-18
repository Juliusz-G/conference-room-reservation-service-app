import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationService } from 'src/app/services/reservation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConferenceRoomService } from 'src/app/services/conference-room.service';
import { ConferenceRoom } from 'src/app/models/conference-room';


@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  form!: FormGroup;
  conferenceRooms: ConferenceRoom[];

  constructor(public reservationService: ReservationService,
      private router: Router,
      private conferenceRoomService: ConferenceRoomService ) { }

  ngOnInit(): void {
    this.conferenceRoomService.getConferenceRooms().subscribe((data: ConferenceRoom[])=>{
      this.conferenceRooms = data;
      console.log(this.conferenceRooms);
    }); 

    this.form = new FormGroup({
      conferenceRoomId: new FormControl(''),
      startDateTime: new FormControl('', [Validators.required]),
      endDateTime: new FormControl('', [Validators.required])

      // Validators.pattern("\\d[.]\\d\\d")
  }); 
}

  get f() {
    return this.form.controls;
  }

  submit(){
    const selectedRoom = this.conferenceRooms.find(a => a.id === Number(this.form.value.conferenceRoomId))
    console.log(this.form.value);
    this.reservationService.addReservation({...this.form.value, conferenceRoom: selectedRoom}).subscribe(() => {
      console.log('Reservation created successfully!');
      this.router.navigateByUrl('/reservation').then(() => alert("Reservation created successfully!"))
    })
  }

}
