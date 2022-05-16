import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConferenceRoom} from "../models/conference-room";

@Injectable({
  providedIn: 'root'
})
export class ConferenceRoomService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getConferenceRooms(): Observable<ConferenceRoom[]> {
    return this.http.get<ConferenceRoom[]>(`${this.apiUrl}/conference-room//get/all`);
  }

  public getConferenceRoomsForOrganisation(organisationId: number): Observable<ConferenceRoom[]> {
    return this.http.get<ConferenceRoom[]>(`${this.apiUrl}/conference-room/get/all-for-organisation/${organisationId}`);
  }

  public addOConferenceRoom(conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.post<ConferenceRoom>(`${this.apiUrl}/conference-room/create`, conferenceRoom);
  }

  public updateConferenceRoom(conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.put<ConferenceRoom>(`${this.apiUrl}/conference-room/create`, conferenceRoom);
  }

  public deleteConferenceRoom(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/conference-room/remove`);
  }
}
