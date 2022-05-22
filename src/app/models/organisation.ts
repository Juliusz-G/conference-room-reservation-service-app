import {ConferenceRoom} from "./conference-room";

export class Organisation {
  id!: number;
  name!: string;
  description!: string;
  conferenceRooms: ConferenceRoom[] = [];

  public getName(): String {
    return this.name;
  }

}
