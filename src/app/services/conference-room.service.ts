import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ConferenceRoom} from "../models/conference-room";

@Injectable({
  providedIn: 'root'
})
export class ConferenceRoomService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getConferenceRoom(conferenceRoomId: number): Observable<ConferenceRoom> {
    return this.http.get<ConferenceRoom>(`${this.apiUrl}/conference-room/get/${conferenceRoomId}`).pipe(catchError(this.errorHandler));
  }

  public getConferenceRooms(): Observable<ConferenceRoom[]> {
    return this.http.get<ConferenceRoom[]>(`${this.apiUrl}/conference-room/all`).pipe(catchError(this.errorHandler));
  }

  public getConferenceRoomsForOrganisation(organisationId: number): Observable<ConferenceRoom[]> {
    return this.http.get<ConferenceRoom[]>(`${this.apiUrl}/conference-room/all-for-organisation/${organisationId}`).pipe(catchError(this.errorHandler));
  }

  public createConferenceRoom(conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.post<ConferenceRoom>(`${this.apiUrl}/conference-room`, conferenceRoom).pipe(catchError(this.errorHandler));
  }

  public updateConferenceRoom(conferenceRoomId: number, conferenceRoom: ConferenceRoom): Observable<ConferenceRoom> {
    return this.http.put<ConferenceRoom>(`${this.apiUrl}/conference-room/${conferenceRoomId}`, conferenceRoom).pipe(catchError(this.errorHandler));
  }

  public deleteConferenceRoom(conferenceRoomId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/conference-room/${conferenceRoomId}`).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:any) {
    let errorMessage: string;
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
