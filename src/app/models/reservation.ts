import {ConferenceRoom} from "./conference-room";

export interface Reservation {
  id: number;
  startDateTime: string;
  endDateTime: string;
  conferenceRoom: ConferenceRoom;
}
