import {ConferenceRoom} from "./conference-room";

export class Organisation {
  name!: string;
  description!: string;
  conferenceRooms: ConferenceRoom[] = [];
}
