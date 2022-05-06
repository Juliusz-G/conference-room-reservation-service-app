import {Component, OnInit} from '@angular/core';
import {OrganisationService} from "../../services/organisation.service";
import {Organisation} from "../../models/organisation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  // declaration of empty array, where getAllOrganisations() will fill it
  public organisations: Organisation[] = [];

  // service injection
  constructor(private organisationService: OrganisationService) {
  }

  ngOnInit(): void {
    this.getAllOrganisations();
  }

  // gets all organisations from "/organisation/get/all" endpoint
  public getAllOrganisations(): void {
    this.organisationService.getAllOrganisations().subscribe(
      (response: Organisation[]) => {
        this.organisations = response;
        console.log(this.organisations)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
