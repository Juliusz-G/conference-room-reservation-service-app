import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Organisation} from "../models/organisation";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  private apiUrl = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  };


  constructor(private http: HttpClient) { }

  public getOrganisation(organisationName: string): Observable<Organisation> {
    return this.http.get<Organisation>(`${this.apiUrl}/organisation/all/`);
  }

  public getAllOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${this.apiUrl}/organisation/all`);
  }

  public addOrganisation(organisation: Organisation): Observable<Organisation> {
    return this.http.post<Organisation>(`${this.apiUrl}/organisation/create`, organisation);
  }

  public updateOrganisation(organisation: Organisation): Observable<Organisation> {
    return this.http.put<Organisation>(`${this.apiUrl}/organisation/update`, organisation, this.httpOptions);
  }

  public deleteOrganisation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/organisation/remove/${id}`);
  }

}


