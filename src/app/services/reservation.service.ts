import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Reservation } from 'src/app/models/reservation';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<Reservation[]> {
       return this.http.get<Reservation[]>(`${this.apiServerUrl}/reservation/all`);
  }

  public addReservation(reservation: Reservation): Observable<Reservation> {
       return this.http.post<Reservation>(`${this.apiServerUrl}/reservation/create`, reservation);
  }

  public updateReservation(reservation: Reservation): Observable<Reservation> {
       return this.http.put<Reservation>(`${this.apiServerUrl}/reservation/update`, reservation);
  }

  public deleteReservation(reservationId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/reservation/remove/${reservationId}`);
  }


}