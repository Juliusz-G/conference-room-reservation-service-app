import { Component, OnInit } from '@angular/core';
import {OrganisationService} from "../../services/organisation.service";
import {Organisation} from "../../models/organisation";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisation-add',
  templateUrl: './organisation-add.component.html',
  styleUrls: ['./organisation-add.component.css']
})
export class OrganisationAddComponent implements OnInit {

  organisationId: number;
  form: FormGroup;

  constructor(public organisationService: OrganisationService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
   
  }

  get f() {
    return this.form.controls;
  }

  submit(){
    this.organisationService.addOrganisation(this.form.value).subscribe(() => {
      console.log('Organisation created successfully!');
      this.router.navigateByUrl('/organisation').then(() => alert("Organisation created successfully!"))
    })
  }
}