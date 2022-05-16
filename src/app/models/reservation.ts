import {ConferenceRoom} from "./conference-room";

export class Reservation {
  id!: number;
  startDateTime!: string;
  endDateTime!: string;
  conferenceRoom!: ConferenceRoom;
}
