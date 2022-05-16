import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../services/organisation.service";
import {Organisation} from "../../models/organisation";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-organisation-add',
  templateUrl: './organisation-add.component.html',
  styleUrls: ['./organisation-add.component.css']
})
export class OrganisationAddComponent implements OnInit {

  constructor(private organisationService: OrganisationService) { }

  organisation: Organisation = new Organisation();
  submitted:boolean = false;

  ngOnInit(): void {
    this.submitted = false;
  }

  organisationsaveform = new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    description:new FormControl('',Validators.required)
  });

  saveOrganisation() {
    this.organisation = new Organisation();
    this.organisation.name = this.OrganisationName!.value;
    this.organisation.description = this.OrganisationDescription!.value;
    this.organisation.conferenceRooms = [];
    this.submitted = true;
    this.save();
  }

  save() {
    this.organisationService.addOrganisation(this.organisation).subscribe(
      data => console.log(data),
      error => console.log(error));
      this.organisation = new Organisation();
  }

  get OrganisationName() {
    return this.organisationsaveform.get('name');
  }

  get OrganisationDescription() {
    return this.organisationsaveform.get('description')
  }

  addOrganisationForm() {
    this.submitted = false;
    this.organisationsaveform.reset();
  }
}
