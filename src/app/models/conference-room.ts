import {Reservation} from "./reservation";
import {Organisation} from "./organisation";

export class ConferenceRoom {

  private _id: number;
  private _name: string;
  private _identifier: string;
  private _level: number;
  private _availability: boolean;
  private _numberOfStandingPlaces: number;
  private _numberOfSittingPlaces: number;
  private _reservationList: Reservation[];
  public _organisation: Organisation;
  private _organisationName: String;

  constructor(id: number, name: string, identifier: string, level: number, availability: boolean, numberOfStandingPlaces: number, numberOfSittingPlaces: number, reservationList: Reservation[], organisation: Organisation) {
    this._id = id;
    this._name = name;
    this._identifier = identifier;
    this._level = level;
    this._availability = availability;
    this._numberOfStandingPlaces = numberOfStandingPlaces;
    this._numberOfSittingPlaces = numberOfSittingPlaces;
    this._reservationList = reservationList;
    this._organisation = organisation;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get availability(): boolean {
    return this._availability;
  }

  set availability(value: boolean) {
    this._availability = value;
  }

  get numberOfStandingPlaces(): number {
    return this._numberOfStandingPlaces;
  }

  set numberOfStandingPlaces(value: number) {
    this._numberOfStandingPlaces = value;
  }

  get numberOfSittingPlaces(): number {
    return this._numberOfSittingPlaces;
  }

  set numberOfSittingPlaces(value: number) {
    this._numberOfSittingPlaces = value;
  }

  get reservationList(): Reservation[] {
    return this._reservationList;
  }

  set reservationList(value: Reservation[]) {
    this._reservationList = value;
  }

  get organisation(): Organisation {
    return this._organisation;
  }

  set organisation(value: Organisation) {
    this._organisation = value;
  }

  get organisationName(): String {
    return this._organisation.name;
  }

}
