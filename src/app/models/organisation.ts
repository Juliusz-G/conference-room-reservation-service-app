import {ConferenceRoom} from "./conference-room";

export class Organisation {

  id!: number;
  private _name!: string;
  description!: string;
  conferenceRooms: ConferenceRoom[] = [];

  get name(): string {
    return this._name;
  }

}
