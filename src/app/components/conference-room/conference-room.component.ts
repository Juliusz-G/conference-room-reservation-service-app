import {Component, OnInit} from '@angular/core';
import {ConferenceRoom} from "../../models/conference-room";
import {ConferenceRoomService} from "../../services/conference-room.service";

@Component({
  selector: 'app-conference-room',
  templateUrl: './conference-room.component.html',
  styleUrls: ['./conference-room.component.css']
})
export class ConferenceRoomComponent implements OnInit {

  conferenceRooms: ConferenceRoom[] = [];

  constructor(public conferenceRoomService: ConferenceRoomService) {
  }

  ngOnInit(): void {
    this.conferenceRoomService.getConferenceRooms().subscribe((data: ConferenceRoom[])=>{
      this.conferenceRooms = data;
      console.log(this.conferenceRooms);
    })
  }

  deleteConferenceRoom(conferenceRoomId: number) {
    this.conferenceRoomService.deleteConferenceRoom(conferenceRoomId).subscribe(() => {
      this.conferenceRooms = this.conferenceRooms.filter(item => item.id !== conferenceRoomId);
      console.log('Conference room deleted successfully!');
    })
  }

}
