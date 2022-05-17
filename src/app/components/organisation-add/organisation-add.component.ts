import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../services/organisation.service";
import {Organisation} from "../../models/organisation";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-organisation-add',
  templateUrl: './organisation-add.component.html',
  styleUrls: ['./organisation-add.component.css']
})
export class OrganisationAddComponent implements OnInit {

  constructor(private organisationService: OrganisationService) { }

  organisation: Organisation = new Organisation();
  organisations: Organisation[] = [];


  ngOnInit(): void {
    this.getOrganisations();
    console.log(this.organisations)
  }

  public addOrganisation(addForm: NgForm): void {
    document.getElementById('add-organisation-form')?.click();
    this.organisationService.addOrganisation(addForm.value).subscribe(
      (response: Organisation) => {
        console.log(response);
        this.getOrganisations();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public getOrganisations(): void {
    this.organisationService.getAllOrganisations().subscribe(
      (response: Organisation[]) => {
        this.organisations = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateOrganisation(organisation: Organisation): void {
    this.organisationService.updateOrganisation(organisation).subscribe(
      (response: Organisation) => {
        console.log(response);
        this.getOrganisations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteOrganisation(id: number): void {
    this.organisationService.deleteOrganisation(id).subscribe(
      (response: void) => {
        this.getOrganisations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSubmit(){
  }

}
