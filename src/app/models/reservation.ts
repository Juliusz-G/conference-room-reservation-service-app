import {ConferenceRoom} from "./conference-room";

export class Reservation {


  id!: number;
  startDateTime!: string;
  endDateTime!: string;
  conferenceRoom!: ConferenceRoom;
  private _conferenceRoomName: string;

  get conferenceRoomName(): string {
    return this.conferenceRoom.name;
  }
}
