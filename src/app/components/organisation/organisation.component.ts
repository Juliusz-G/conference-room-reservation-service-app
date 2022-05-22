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

  organisations: Organisation[] = [];

  constructor(public organisationService: OrganisationService) { }

  ngOnInit(): void {
    this.getOrganisations();
    // this.organisationService.getAllOrganisations().subscribe((data: Organisation[]) => {
    //   this.organisations = data;
    //   console.log(this.organisations);
    // })
  }


  deleteOrganisation(organisationId: number) {
    if (confirm('Do you want to delete this organisation?')) {
      this.organisationService.deleteOrganisation(organisationId).subscribe(() => {
        this.organisations = this.organisations.filter(item => item.id !== organisationId);
        console.log('Organisation deleted successfully!');
      })
    } 
  }

  public searchOrganisations(key: string): void {
    console.log(key);
    const results: Organisation[] = [];
    for (const organisation of this.organisations) {
      if (organisation.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(organisation);
      }
    }
    this.organisations = results;
    if (results.length === 0 || !key) {
      this.getOrganisations();
    }
  }

  public getOrganisations(): void {
    this.organisationService.getAllOrganisations().subscribe((data: Organisation[]) => {
      this.organisations = data;
      console.log(this.organisations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
