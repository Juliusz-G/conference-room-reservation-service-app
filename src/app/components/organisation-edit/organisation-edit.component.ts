import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Organisation } from 'src/app/models/organisation';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: 'app-organisation-edit',
  templateUrl: './organisation-edit.component.html',
  styleUrls: ['./organisation-edit.component.css']
})
export class OrganisationEditComponent implements OnInit {

  organisationId: number;
  form: FormGroup;

  constructor(public organisationService: OrganisationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.organisationId = this.route.snapshot.params['organisationId'];
    console.log(this.organisationId);
    this.organisationService.getOrganisationById(this.organisationId).subscribe((data: Organisation) => {
      this.form.patchValue(data);
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.organisationService.updateOrganisation(this.organisationId, this.form.value).subscribe(() => {
      console.log('Organisation updated successfully!');
      this.router.navigateByUrl('/organisations').then(() => alert("Organisation updated successfully!"));
    })
  }
}
