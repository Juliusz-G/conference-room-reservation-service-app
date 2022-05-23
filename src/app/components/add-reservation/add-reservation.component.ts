import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationService } from 'src/app/services/reservation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConferenceRoomService } from 'src/app/services/conference-room.service';
import { ConferenceRoom } from 'src/app/models/conference-room';
import { Organisation } from 'src/app/models/organisation';
import { OrganisationService } from 'src/app/services/organisation.service';


@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  form!: FormGroup;
  conferenceRooms: ConferenceRoom[];
  organisations: Organisation[];
  orgConferenceRooms: ConferenceRoom[];

  constructor(public reservationService: ReservationService,
      private router: Router,
      private conferenceRoomService: ConferenceRoomService,
      private organisationService: OrganisationService ) { }

  ngOnInit(): void {
    this.organisationService.getAllOrganisations().subscribe((data: Organisation[])=>{
      this.organisations = data;
      console.log(this.organisations);
    });

    this.conferenceRoomService.getConferenceRooms().subscribe((data: ConferenceRoom[])=>{
      this.conferenceRooms = data;
      console.log(this.conferenceRooms);
    });

    this.form = new FormGroup({
      organisationId: new FormControl(null, [Validators.required]),
      conferenceRoomId: new FormControl('', [Validators.required]),
      startDateTime: new FormControl('', [Validators.required]),
      endDateTime: new FormControl('', [Validators.required])

    });

    this.form.get('organisationId')?.valueChanges.subscribe(value => {
      const selectedOrg = this.organisations.find(org => {console.log('org', org, value); return org.id == value } )
      this.orgConferenceRooms = this.conferenceRooms.filter(room => room.organisationName === selectedOrg?.name );
    })
}

  get f() {
    return this.form.controls;
  }

  submit(){
    const selectedRoom = this.conferenceRooms.find(a => a.id === Number(this.form.value.conferenceRoomId))
    console.log(this.form.value);
    this.reservationService.addReservation({...this.form.value, conferenceRoom: selectedRoom}).subscribe(() => {
      console.log('Reservation created successfully!');
      this.router.navigateByUrl('/reservations').then(() => alert("Reservation created successfully!"))
    }, (response) => {
      console.log('error', response.error);
      alert(response.error.errorMessage);
    })
  }

}
