import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { OrganisationService } from 'src/app/services/organisation.service';
import {ConferenceRoom} from "../../models/conference-room";
import {ConferenceRoomService} from "../../services/conference-room.service";

@Component({
  selector: 'app-conference-room',
  templateUrl: './conference-room.component.html',
  styleUrls: ['./conference-room.component.css']
})
export class ConferenceRoomComponent implements OnInit {

  conferenceRooms: ConferenceRoom[] = [];
  organisationName: String;
  conferenceRoom: ConferenceRoom;

  constructor(private conferenceRoomService: ConferenceRoomService) {
  }

  ngOnInit(): void {
    this.getConferenceRooms();
    // this.conferenceRoomService.getConferenceRooms().subscribe((data: ConferenceRoom[])=>{
    //   this.conferenceRooms = data;
    //   console.log(this.conferenceRooms);
    // })
  }

  deleteConferenceRoom(conferenceRoomId: number) {
    if (confirm('Do you want to delete this conference room?')) {
      this.conferenceRoomService.deleteConferenceRoom(conferenceRoomId).subscribe(() => {
        this.conferenceRooms = this.conferenceRooms.filter(item => item.id !== conferenceRoomId);
        console.log('Conference room deleted successfully!');
      })
    }
  }

  public searchConferenceRooms(key: string): void {
    console.log(key);
    const results: ConferenceRoom[] = [];
    for (const conferenceRoom of this.conferenceRooms) {
      if (conferenceRoom.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(conferenceRoom);
      }
    }
    this.conferenceRooms = results;
    if (results.length === 0 || !key) {
      this.getConferenceRooms();
    }
  }

  public getConferenceRooms(): void {
    this.conferenceRoomService.getConferenceRooms().subscribe((data: ConferenceRoom[]) => {
      this.conferenceRooms = data;
      console.log(this.conferenceRooms);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getOrgName(conferenceRoom: ConferenceRoom): String {
    return this.conferenceRoom._organisation.name;
  }

}