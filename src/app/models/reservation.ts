import {ConferenceRoom} from "./conference-room";
import {Organisation} from "./organisation";

export interface Reservation {
  id: number;
  name: string;
  start: string;
  end: string;
  conferenceRoom: ConferenceRoom;
  organisation: Organisation;
}
