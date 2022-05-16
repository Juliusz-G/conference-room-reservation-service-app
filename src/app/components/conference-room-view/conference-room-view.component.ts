import {Component, OnInit} from '@angular/core';
import {ConferenceRoom} from "../../models/conference-room";
import {ConferenceRoomService} from "../../services/conference-room.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-conference-room-view',
  templateUrl: './conference-room-view.component.html',
  styleUrls: ['./conference-room-view.component.css']
})
export class ConferenceRoomViewComponent implements OnInit {

  conferenceRoomId!: number;
  conferenceRoom!: ConferenceRoom;

  constructor(
    public conferenceRoomService: ConferenceRoomService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.conferenceRoomId = this.route.snapshot.params['conferenceRoomId'];

    this.conferenceRoomService.getConferenceRoom(this.conferenceRoomId).subscribe((data: ConferenceRoom) => {
      this.conferenceRoom = data;
    });
  }

}
