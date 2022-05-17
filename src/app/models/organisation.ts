import {ConferenceRoom} from "./conference-room";

export class Organisation {
  id!: number;
  name!: string;
  description!: string;
  conferenceRooms: ConferenceRoom[] = [];
}
