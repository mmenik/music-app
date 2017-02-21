import { Component, OnInit } from '@angular/core';

import { Release } from './release.model';
import { ReleaseService } from './release.service';

@Component({
    selector: 'app-release-list',
    templateUrl: './release-list.component.html'    
})
export class ReleaseListComponent implements OnInit {

    constructor(private releaseService: ReleaseService) { }

    releases: Release[];

    ngOnInit() {
        this.releases = this.releaseService.getReleases();
    }
}