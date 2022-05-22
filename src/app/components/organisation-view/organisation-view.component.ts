import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organisation } from 'src/app/models/organisation';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: 'app-organisation-view',
  templateUrl: './organisation-view.component.html',
  styleUrls: ['./organisation-view.component.css']
})
export class OrganisationViewComponent implements OnInit {

  organisationId: number;
  organisation: Organisation;

  constructor(
    public organisationService: OrganisationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.organisationId = this.route.snapshot.params['organisationId'];

    this.organisationService.getOrganisationById(this.organisationId).subscribe((data: Organisation) => {
      this.organisation = data;
    });
  }

}
