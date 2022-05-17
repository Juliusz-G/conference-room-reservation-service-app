import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ConferenceRoomService} from "../../services/conference-room.service";

@Component({
  selector: 'app-conference-room-create',
  templateUrl: './conference-room-create.component.html',
  styleUrls: ['./conference-room-create.component.css']
})
export class ConferenceRoomCreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public conferenceRoomService: ConferenceRoomService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
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
    console.log(this.form.value);
    this.conferenceRoomService.createConferenceRoom(this.form.value).subscribe(() => {
      console.log('Conference room created successfully!');
      this.router.navigateByUrl('').then(() => confirm("Conference room created successfully!"));
    })
  }

}
