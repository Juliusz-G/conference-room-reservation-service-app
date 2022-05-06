import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Organisation} from "../models/organisation";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  // variable that holds base url path to backend api
  private apiUrl = environment.apiUrl;

  // injection of HttpClient which enable communication with backend through HTTP protocol
  constructor(private http: HttpClient) { }

  // gets data from passed url
  public getAllOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(`${this.apiUrl}/organisation/get/all`);
  }
}
