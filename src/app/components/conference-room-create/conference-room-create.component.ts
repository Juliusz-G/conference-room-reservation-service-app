import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { ConferenceRoom } from 'src/app/models/conference-room';
import { Organisation } from 'src/app/models/organisation';
import { OrganisationService } from 'src/app/services/organisation.service';
import {ConferenceRoomService} from "../../services/conference-room.service";

@Component({
  selector: 'app-conference-room-create',
  templateUrl: './conference-room-create.component.html',
  styleUrls: ['./conference-room-create.component.css']
})
export class ConferenceRoomCreateComponent implements OnInit {

  form!: FormGroup;
  organisations: Organisation[];


  constructor(
    private conferenceRoomService: ConferenceRoomService,
    private router: Router,
    private organisationService: OrganisationService
  ) {
  }

  ngOnInit(): void {
    this.organisationService.getAllOrganisations().subscribe((data: Organisation[])=>{
      this.organisations = data;
      console.log(this.organisations);
    }); 

    this.form = new FormGroup({
      organisationId: new FormControl(null, [Validators.required]),
      conferenceRoomName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      identifier: new FormControl('', [Validators.required, Validators.pattern("\\d[.]\\d\\d")]),
      level: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
      // availability: new FormControl('', [Validators.required]),
      numberOfStandingPlaces: new FormControl('', [Validators.required, Validators.min(0)]),
      numberOfSittingPlaces: new FormControl('', [Validators.required, Validators.min(0)]),
      // Organisation: new FormControl('', [Validators.required])

    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    const selectedOrganisation = this.organisations.find(a => a.id === Number(this.form.value.organisationId));
    console.log(this.form.value);
    this.conferenceRoomService.createConferenceRoom(this.form.value).subscribe(() => {
      console.log('Conference room created successfully!');
      this.router.navigateByUrl('/conference-room').then(() => alert("Conference room created successfully!"));
    })
  }

}
