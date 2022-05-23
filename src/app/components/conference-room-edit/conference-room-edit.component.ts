import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConferenceRoom} from "../../models/conference-room";
import {ConferenceRoomService} from "../../services/conference-room.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-conference-room-edit',
  templateUrl: './conference-room-edit.component.html',
  styleUrls: ['./conference-room-edit.component.css']
})
export class ConferenceRoomEditComponent implements OnInit {

  conferenceRoomId: number;
  form: FormGroup;

  constructor(
    public conferenceRoomService: ConferenceRoomService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.conferenceRoomId = this.route.snapshot.params['conferenceRoomId'];
    this.conferenceRoomService.getConferenceRoom(this.conferenceRoomId).subscribe((data: ConferenceRoom) => {
      this.form.patchValue(data);
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.maxLength(20)]),
      identifier: new FormControl('', [Validators.pattern("\\d[.]\\d\\d")]),
      level: new FormControl('', [Validators.min(0), Validators.max(10)]),
      // availability: new FormControl('', [Validators.required]),
      numberOfStandingPlaces: new FormControl('', [Validators.min(0)]),
      numberOfSittingPlaces: new FormControl('', [Validators.min(0)]),
      // Organisation: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.conferenceRoomService.updateConferenceRoom(this.conferenceRoomId, this.form.value).subscribe(() => {
      console.log('Conference Room updated successfully!');
      this.router.navigateByUrl('/conference-rooms').then(() => alert("Conference room updated successfully!"));
    }, (response) => {
      console.log('error', response);
      alert('Conference room already exists!');
    })
  }

}
