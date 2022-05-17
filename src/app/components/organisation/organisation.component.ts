import {Component, OnInit} from '@angular/core';
import {OrganisationService} from "../../services/organisation.service";
import {Organisation} from "../../models/organisation";
import {HttpErrorResponse} from "@angular/common/http";
import {ConferenceRoom} from "../../models/conference-room";

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {

  public organisations: Organisation[] = [];

  constructor(private organisationService: OrganisationService) {
  }

  ngOnInit(): void {
//     this.getAllOrganisations();
  }


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
