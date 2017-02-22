import { Component, Input } from '@angular/core';
import { Release } from './release.model';
import { ReleaseService } from './release.service';

@Component({
    selector: 'app-release',
    templateUrl: './release.component.html',
    styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
    @Input() release: Release;

    constructor(private releaseService: ReleaseService) { }

    onEdit() {
        this.releaseService.editRelease(this.release);
    }

    onDelete() {
        this.releaseService.deleteRelease(this.release)
            .subscribe(result => console.log(result));
    }
}