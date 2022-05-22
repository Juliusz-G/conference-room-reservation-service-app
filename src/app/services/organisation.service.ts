import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Organisation} from "../models/organisation";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getOrganisation(organisationName: string): Observable<Organisation> {
    return this.http.get<Organisation>(`${this.apiUrl}/organisations/${organisationName}`);
  }

  public getOrganisationById(id: number): Observable<Organisation> {
    return this.http.get<Organisation>(`${this.apiUrl}/organisations/${id}`);
  }

  public getAllOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${this.apiUrl}/organisations`);
  }

  public addOrganisation(organisation: Organisation): Observable<Organisation> {
    return this.http.post<Organisation>(`${this.apiUrl}/organisations`, organisation);
  }

  public updateOrganisation(organisationId: number, organisation: Organisation): Observable<Organisation> {
    return this.http.put<Organisation>(`${this.apiUrl}/organisations/${organisationId}`, organisation);
  }

  public deleteOrganisation(organisationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/organisations/${organisationId}`);
  }

}
