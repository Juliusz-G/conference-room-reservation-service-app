import {ConferenceRoom} from "./conference-room";

export interface Organisation {
  id: number;
  name: string;
  description: string;
  conferenceRooms: ConferenceRoom[];
}

// export class Organisation {
//   id?:number;
//   name: string;
//   description: string;
//   conferenceRooms: ConferenceRoom[];
//
//
//   constructor(attrs: OrganisationAttrs) {
//     this.id = attrs.id;
//     this.name = attrs.name;
//     this.description = attrs.description;
//     this.conferenceRooms = attrs.conferenceRooms;
//   }


}
